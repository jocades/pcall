import type { Server } from 'bun'
import type { MaybePromise } from '../types'
import type { ServeOptions } from '../server'
import { RPCError } from '../error'
import { RPCResponse } from '../rpc'
import { isFn } from '../util'
import {
  RegExpRouter,
  type HTTPRouter,
  type Handler,
  HTTP_METHODS,
  type HTTP_METHOD,
} from './router'
import { Context } from './context'

type H = (path: string, ...handlers: Handler[]) => Liar

export class Liar {
  get!: H
  post!: H
  put!: H
  delete!: H
  options!: H
  patch!: H
  #opts: ServeOptions
  #router: HTTPRouter

  constructor(opts: ServeOptions & { router?: HTTPRouter } = {}) {
    this.#router = opts.router ?? new RegExpRouter()
    delete opts.router

    this.#opts = opts

    HTTP_METHODS.forEach((method) => {
      this[method.toLowerCase() as Lowercase<HTTP_METHOD>] = (
        path,
        ...handlers
      ) => {
        this.#router.addRoute(method, path, handlers)
        return this
      }
    })
  }

  all(path: string, ...handlers: Handler[]) {
    HTTP_METHODS.forEach((method) => {
      this.#router.addRoute(method, path, handlers)
    })
    return this
  }

  use(...handlers: Handler[]) {
    this.#router.addMiddleware(handlers)
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
      const match = this.#router.match(req.method as HTTP_METHOD, c.req.path)

      if (!match) {
        if (this.#opts.notFound) {
          return this.#opts.notFound(c)
        }
        return c.text('Not Found', 404)
      }

      c.req.params = match.params

      return this.#router.dispatch(match.handlers, c)
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

      return c.text('Internal Server Error', 500)
    }
  }
}

// try to add 'params' to the path

/* const node = new Node('/users/:id', [(c: Context) => c.text('Hello World')])

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
    console.log('match', match)
    if (!match) {
      return
    }

    const params = Object.fromEntries(
      route.params.map((param, i) => [param, match[i + 1]]),
    )

    return { handlers: route.handlers, params }
  }
}

const x = match('GET', '/users/ajajajaj')
console.log(x) */
