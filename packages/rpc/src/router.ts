import { type AnyProcedure } from './procedure'
import { isObj } from './util'

export interface RouterDef {
  [key: string]: AnyProcedure | Router
}

export type Router<T extends RouterDef = RouterDef> = {
  $def: T
  $router: true
  /**
   * Flatten the router into a map of paths to procedures.
   */
  flat(): FlatRouter
}

export function router<T extends RouterDef>(def: T): Router<T> {
  return {
    $def: def,
    $router: true,
    flat: () => flattenRouter(def),
  }
}

export type FlatRouter = Map<string, AnyProcedure>

export function flattenRouter(router: RouterDef): FlatRouter {
  const flatRouter: FlatRouter = new Map()

  function flatten(router: RouterDef, path = '') {
    for (let [key, procOrRouter] of Object.entries(router)) {
      let newPath = `${path}${key}`

      if (isRouter(procOrRouter)) {
        flatten(procOrRouter.$def, newPath + '.')
        continue
      }

      if (flatRouter.has(newPath)) {
        throw new Error(`Path already exists: ${newPath}`)
      }

      flatRouter.set(newPath, procOrRouter)
    }
  }
  flatten(router)

  return flatRouter
}

export function isRouter(value: unknown): value is Router {
  return isObj(value) && '$router' in value
}
