import type { MaybePromise } from '../types'
import type { Context } from './context'
import type { Params } from './request'

export const HTTP_METHODS = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
  'OPTIONS',
  'PATCH',
] as const

export type HTTP_METHOD = (typeof HTTP_METHODS)[number]

export type Handler = (
  c: Context,
  next: () => Promise<void>,
) => MaybePromise<Response | void>

export type MatchRoute = { handlers: Handler[]; params: Params }

export interface HTTPRouter {
  addRoute(method: string, path: string, handlers: Handler[]): void
  addMiddleware(handlers: Handler[]): void
  parsePath?: (path: string) => { regex: RegExp; params: string[] }
  match(method: string, path: string): MatchRoute | undefined
  dispatch(handlers: Handler[], c: Context): MaybePromise<Response>
}

interface Route {
  path: string
  regex: RegExp
  params: string[]
  handlers: Handler[]
}

export class RegExpRouter implements HTTPRouter {
  #middleware: Handler[] = []
  #routes: Record<HTTP_METHOD, Route[]> = {
    GET: [],
    POST: [],
    PUT: [],
    DELETE: [],
    OPTIONS: [],
    PATCH: [],
  }

  addRoute(method: HTTP_METHOD, path: string, handlers: Handler[]) {
    const { regex, params } = this.parsePath(path)
    const route = { path, regex, params, handlers }
    this.#routes[method].push(route)
    return
  }

  addMiddleware(handlers: Handler[]) {
    this.#middleware.push(...handlers)
  }

  parsePath(path: string) {
    const params: string[] = []
    const regex = path
      .split('/')
      .map((segment) => {
        if (segment === '*') {
          return '.*'
        }

        if (segment.startsWith(':')) {
          params.push(segment.slice(1))
          return '([^/]+)'
        }

        return segment
      })
      .join('/')

    return { regex: new RegExp(`^${regex}$`), params }
  }

  match(method: HTTP_METHOD, path: string) {
    for (const route of this.#routes[method]) {
      const match = path.match(route.regex)

      if (!match) {
        continue
      }

      const params = Object.fromEntries(
        route.params.map((param, i) => [param, match[i + 1]]),
      )

      return { handlers: route.handlers, params }
    }
  }

  dispatch(handlers: Handler[], c: Context) {
    return pipe(this.#middleware.concat(handlers))(c)
  }

  private sortRoutes(method: HTTP_METHOD) {
    this.#routes[method].sort((a, b) => {
      // Sort by the number of segments, then by specificity
      const as = a.path.split('/').length
      const bs = b.path.split('/').length
      if (as !== bs) return bs - as

      // Sort by the number of params
      const ap = (a.path.match(/:\w+/g) || []).length
      const bp = (b.path.match(/:\w+/g) || []).length
      return bp - ap
    })
  }
}

export class KVRouter implements HTTPRouter {
  #middleware: Handler[] = []
  #routes: Record<HTTP_METHOD, Record<string, Handler[]>> = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
    OPTIONS: {},
    PATCH: {},
  }

  addRoute(method: HTTP_METHOD, path: string, handlers: Handler[]) {
    this.#routes[method][path] = handlers
  }

  addMiddleware(handlers: Handler[]) {
    this.#middleware.push(...handlers)
  }

  match(method: HTTP_METHOD, path: string) {
    const handlers = this.#routes[method][path] ?? this.#routes[method]['*']
    return handlers ? { handlers, params: {} } : undefined
  }

  dispatch(handlers: Handler[], c: Context) {
    return pipe(this.#middleware.concat(handlers))(c)
  }
}

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
