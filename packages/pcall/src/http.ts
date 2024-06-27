import type { BunFile, Server } from 'bun'
import type { AnyObject, MaybePromise } from './types'
import type { ServeOptions } from './server'
import { RPCError } from './error'
import { RPCResponse } from './rpc'
import { isFn, merge } from './util'

export const _upgrade = Symbol('upgrade')

type Headers = Record<string, string>

export class Context<T extends AnyObject = AnyObject> {
  req: XRequest
  #server?: Server
  _status = 200
  statusText?: string
  env: T
  headers: Headers

  constructor(
    req: Request,
    server?: Server,
    env: T = {} as T,
    headers: Headers = {},
  ) {
    this.req = new XRequest(req)
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

export type Handler = (
  c: Context,
  next: () => Promise<void>,
) => MaybePromise<Response | void>

function pipe(fns: Handler[]) {
  return async (c: Context) => {
    let index = -1
    let final: Response | null = null

    async function dispatch(i: number) {
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

    return final!
  }
}

const HTTP_METHODS = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
  'OPTIONS',
  'PATCH',
] as const

type HTTP_METHOD = (typeof HTTP_METHODS)[number]

type H = (path: string, ...handlers: Handler[]) => LinearRouter

class LinearRouterBase {
  get!: H
  post!: H
  put!: H
  delete!: H
  options!: H
  patch!: H
  #opts: ServeOptions
  #middleware: Handler[] = []
  #routes: Record<HTTP_METHOD, Record<string, Handler[]>> = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
    OPTIONS: {},
    PATCH: {},
  }

  constructor(opts: ServeOptions) {
    this.#opts = opts

    HTTP_METHODS.forEach((method) => {
      this[method.toLowerCase() as Lowercase<HTTP_METHOD>] = (
        path,
        ...handlers
      ) => {
        this.addRoute(method, path, handlers)
        return this
      }
    })
  }

  private addRoute(method: HTTP_METHOD, path: string, handlers: Handler[]) {
    this.#routes[method][path] = handlers
  }

  use(...handlers: Handler[]) {
    this.#middleware.push(...handlers)
    return this
  }

  all(path: string, ...handlers: Handler[]) {
    HTTP_METHODS.forEach((method) => {
      this.addRoute(method, path, handlers)
    })
    return this
  }

  notFound(handler: (c: Context) => MaybePromise<Response>) {
    this.#opts.notFound = handler
    return this
  }

  // use arrow function to not inherit 'this'
  fetch = async (req: Request, server?: Server) => {
    const { context } = this.#opts
    const env = isFn(context) ? await context(req) : context
    const c = new Context(req, server, env, this.#opts.headers)

    try {
      const method = req.method as HTTP_METHOD
      const path = c.req.url.pathname

      const handlers = this.#routes[method][path] ?? this.#routes[method]['*']

      if (!handlers) {
        if (this.#opts.notFound) {
          return this.#opts.notFound(c)
        }
        c.status(404)
        return c.text('Not Found')
      }

      return pipe(this.#middleware.concat(handlers))(c)
    } catch (err: any) {
      if (this.#opts.onError) {
        await this.#opts.onError(err)
      } else {
        console.error(err)
      }

      if (err instanceof RPCError) {
        const response = new RPCResponse(-1, undefined, err)
        return c.json(response)
      }

      c.status(500)
      return c.text('Internal Server Error')
    }
  }
}

export class LinearRouter extends LinearRouterBase {
  constructor(opts: ServeOptions = {}) {
    super(opts)
  }
}

function clean(url: string) {
  return url.replace(/\/$/, '')
}

export class XRequest {
  readonly url: URL
  raw: Request

  constructor(req: Request) {
    this.raw = req
    this.url = new URL(clean(req.url))
  }

  json() {
    return this.raw.json()
  }

  text() {
    return this.raw.text()
  }

  blob() {
    return this.raw.blob()
  }

  formData() {
    return this.raw.formData()
  }

  arrayBuffer() {
    return this.raw.arrayBuffer()
  }

  get headers() {
    return this.raw.headers
  }

  get method() {
    return this.raw.method
  }
}

// try to add 'params' to the path
class Node {
  regex: RegExp
  params: string[]
  handlers: Handler[]

  constructor(path: string, handlers: Handler[]) {
    const { regex, params } = parsePath(path)
    this.regex = regex
    this.params = params
    this.handlers = handlers
  }
}

const node = new Node('/users/:id', [(c: Context) => c.text('Hello World')])

const routes: Record<HTTP_METHOD, Node[]> = {
  GET: [node],
  POST: [],
  PUT: [],
  DELETE: [],
  OPTIONS: [],
  PATCH: [],
}

// use regex to parse the path
function parsePath(path: string) {
  const params: string[] = []
  const regex = path.replace(/\/:([^/]+)/g, (_, p) => {
    params.push(p)
    return '/([^/]+)'
  })

  return { regex: new RegExp(`^${regex}$`), params }
}

function match(method: HTTP_METHOD, path: string) {
  for (const route of routes[method]) {
    const match = path.match(route.regex)
    console.log(match)
    if (!match) {
      return { handlers: null, params: {} }
    }

    const params = Object.fromEntries(
      route.params.map((param, i) => [param, match[i + 1]]),
    )

    return { handlers: route.handlers, params }
  }
}

const x = match('GET', 'users/1')
console.log(x)
