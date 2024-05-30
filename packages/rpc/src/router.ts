import { type AnyProcedure, isProcedure } from './procedure'
import { isObject } from './util'

export type Router = {
  [key: string]: AnyProcedure | Router
} & {
  $router?: true
}

export function router<T extends Router>(def: T): T {
  def.$router = true
  return def
}

export type FlatRouter = Map<string, AnyProcedure>

export function flattenRouter(router: Router): FlatRouter {
  const flatRouter: FlatRouter = new Map()

  function flatten(router: Router, path = '') {
    for (let [key, procOrRouter] of Object.entries(router)) {
      let newPath = `${path}${key}`

      if (isRouter(procOrRouter)) {
        flatten(procOrRouter, newPath + '.')
        continue
      }

      if (flatRouter.has(newPath)) {
        throw new Error(`Path already exists: ${newPath}`)
      }

      if (isProcedure(procOrRouter)) {
        flatRouter.set(newPath, procOrRouter)
      }
    }
  }
  flatten(router)

  return flatRouter
}

export function isRouter(value: unknown): value is Router {
  return isObject(value) && '$router' in value
}
