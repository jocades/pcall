import type { BunFile, Server } from 'bun'
import type { MaybePromise } from './types'
import type { ServeOptions } from './server'
import { RPCError } from './error'
import { RPCResponse } from './rpc'

export class Context {
  req: XRequest
  private _server: Server
  private _status = 200
  statusText?: string
  headers: Record<string, string>

  constructor(
    req: Request,
    server: Server,
    headers: Record<string, string> = {},
  ) {
    this.req = new XRequest(req)
    this._server = server
    this.headers = headers
  }

  status(code: number, text?: string) {
    this._status = code
    this.statusText = text
  }

  header(key: string, value: string) {
    this.headers[key] = value
  }

  send() {
    return new Response(null, this.opts)
  }

  json(data: unknown) {
    return Response.json(data, this.opts)
  }

  text(data: string) {
    this.header('content-type', 'text/plain')
    return new Response(data, this.opts)
  }

  html(data: string) {
    this.header('content-type', 'text/html')
    return new Response(data, this.opts)
  }

  file(file: string | BunFile) {
    file = typeof file === 'string' ? Bun.file(file) : file
    this.header('content-type', file.type)
    return new Response(file, this.opts)
  }

  private get opts(): ResponseInit {
    return {
      status: this._status,
      statusText: this.statusText,
      headers: this.headers,
    }
  }

  upgrade() {
    return this._server.upgrade(this.req._req, {
      data: { id: crypto.randomUUID() },
    })
  }
}

export type Handler = (
  c: Context,
  next: () => Promise<Response | void>,
) => MaybePromise<Response | void>

export interface XOptions extends Pick<ServeOptions, 'headers' | 'onError'> {
  onNotFound?: (c: Context) => MaybePromise<Response>
}

function pipe(fns: Handler[]) {
  return async (c: Context) => {
    let index = -1
    let final: Response | null = null

    async function dispatch(i: number): Promise<Response | void> {
      if (i <= index) throw new Error('Cannot call next() multiple times')
      index = i
      let fn = fns[i]
      if (!fn) return
      const result = await fn(c, () => dispatch(i + 1))
      if (result instanceof Response) {
        final = result
      }
    }

    await dispatch(0)

    if (!final) {
      throw new Error('No response')
    }

    return final
  }
}

export class X {
  private opts: XOptions
  private routes: Record<string, Record<string, Handler[]>> = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
    OPTIONS: {},
  }

  constructor(opts: XOptions = {}) {
    this.opts = opts
  }

  get(path: string, ...handlers: Handler[]) {
    this.routes.GET[path] = handlers
  }

  post(path: string, ...handlers: Handler[]) {
    this.routes.POST[path] = handlers
  }

  put(path: string, ...handlers: Handler[]) {
    this.routes.PUT[path] = handlers
  }

  delete(path: string, ...handlers: Handler[]) {
    this.routes.DELETE[path] = handlers
  }

  options(path: string, ...handler: Handler[]) {
    this.routes.OPTIONS[path] = handler
  }

  fetch() {
    return async (req: Request, server: Server) => {
      const c = new Context(req, server)
      const time = logger(req, c.req.url)

      const method = req.method
      const path = c.req.url.pathname

      try {
        const handlers = this.routes[method][path] ?? this.routes[method]['*']

        if (!handlers) {
          if (this.opts.onNotFound) {
            return this.opts.onNotFound(c)
          }
          c.status(404)
          return c.text('Not Found')
        }

        return await pipe(handlers)(c)
      } catch (err: any) {
        if (this.opts.onError) {
          await this.opts.onError(err)
        } else {
          console.error(err)
        }

        if (err instanceof RPCError) {
          const response = new RPCResponse(-1, undefined, err)
          return c.json(response)
        }

        c.status(500)
        return c.text('Internal Server Error')
      } finally {
        time()
      }
    }
  }
}

function logger(req: Request, url: URL) {
  const start = performance.now()
  console.log(`-> ${req.method} ${url.pathname}`)
  return () => {
    const elapsed = (performance.now() - start).toFixed(3)
    console.log(`<- ${req.method} ${url.pathname} - ${elapsed}ms`)
  }
}

export class XRequest {
  readonly url: URL
  _req: Request

  constructor(req: Request) {
    this._req = req
    this.url = new URL(req.url)
  }

  json() {
    return this._req.json()
  }

  text() {
    return this._req.text()
  }

  blob() {
    return this._req.blob()
  }

  formData() {
    return this._req.formData()
  }

  arrayBuffer() {
    return this._req.arrayBuffer()
  }

  get headers() {
    return this._req.headers
  }

  get method() {
    return this._req.method
  }
}
