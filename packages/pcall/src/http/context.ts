import type { BunFile, Server } from 'bun'
import type { AnyObject } from '../types'
import { isDef, merge } from '../util'
import { LiarRequest } from './request'
import type { Handler } from './router'

export type Headers = Record<string, string>

const _upgrade = Symbol('upgrade')

export class Context<T extends AnyObject = AnyObject> {
  req: LiarRequest
  #server?: Server
  _status = 200
  statusText?: string
  env: T
  headers: Headers

  constructor(
    req: Request,
    server?: Server,
    env: T = {} as T,
    headers: Headers = {}
  ) {
    this.req = new LiarRequest(req)
    this.#server = server
    this.env = env
    this.headers = headers
  }

  status(code: number, text?: string) {
    this._status = code
    this.statusText = text
  }

  header(key: string, value: string) {
    this.headers[key] = value
  }

  send(status?: number, headers?: Headers) {
    return new Response(null, this.opts(status, headers))
  }

  json(data: unknown, status?: number, headers?: Headers) {
    return Response.json(data, this.opts(status, headers))
  }

  text(data: string, status?: number, headers?: Headers) {
    this.header('content-type', 'text/plain')
    return new Response(data, this.opts(status, headers))
  }

  html(data: string, status?: number, headers?: Headers) {
    this.header('content-type', 'text/html')
    return new Response(data, this.opts(status, headers))
  }

  file(file: string | BunFile, status?: number, headers?: Headers) {
    file = typeof file === 'string' ? Bun.file(file) : file
    this.header('content-type', file.type)
    return new Response(file, this.opts(status, headers))
  }

  private opts(status?: number, headers?: Headers): ResponseInit {
    return {
      status: status ?? this._status,
      statusText: this.statusText,
      headers: merge(this.headers, headers),
    }
  }

  [_upgrade]() {
    return this.#server?.upgrade(this.req.raw, {
      data: { id: crypto.randomUUID() },
    })
  }
}

export function logger(
  opts: {
    in?: (c: Context) => string
    out?: (c: Context, elapsed: number) => string
    logIncoming?: boolean
  } = {}
): Handler {
  return async (c, next) => {
    const start = performance.now()
    if (opts.logIncoming || !isDef(opts.logIncoming)) {
      console.log(opts.in ? opts.in(c) : `-> ${c.req.method} ${c.req.path}`)
    }
    await next()
    const elapsed = (performance.now() - start).toFixed(3)
    console.log(
      opts.out
        ? opts.out(c, Number(elapsed))
        : `<- ${c.req.method} ${c.req.path} | ${c._status} | ${elapsed}ms`
    )
  }
}

export function serveStatic(dir: string, fallback: string): Handler {
  return async (c) => {
    const path = `${dir}${c.req.path === '/' ? '/index.html' : c.req.path}`
    const file = (await Bun.file(path).exists())
      ? Bun.file(path)
      : Bun.file(`${dir}/${fallback}`)

    c.header('content-type', file.type)
    return c.file(file)
  }
}

export function upgradeWebSocket(): Handler {
  return (c) => {
    if (c[_upgrade]()) {
      return undefined as unknown as Response
    }
    return c.text('Upgrade failed', 500)
  }
}

export interface CorsOptions {
  origins?: string[]
  methods?: string[]
  headers?: string[]
}

export function cors(opts: CorsOptions = {}): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': opts.origins?.join(', ') ?? '*',
    'Access-Control-Allow-Methods':
      opts.methods?.join(', ') ?? 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': opts.headers?.join(', ') ?? 'Content-Type',
  }
}
