import { error } from './error'
import { type AnyProcedure } from './procedure'
import { type RPCRequest } from './rpc'
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
  /**
   * Initialize the router handler.
   * Handle an RPC request and return the result of the procedure.
   * ```ts
   * const handle = router.init()
   * const result = await handle({ path: 'users.list', body: null })
   * ```
   * @param req  - The request object.
   * @param ctx  - The context object to pass to the procedures.
   * @throws {RPCError}
   * @returns The result of the procedure.
   */
  init(): (req: RPCRequest, ctx?: unknown) => Promise<unknown>
}

export function router<T extends RouterDef>(def: T): Router<T> {
  return {
    $def: def,
    $router: true,
    flat: () => flattenRouter(def),
    init() {
      const router = this.flat()

      return (req, ctx) => {
        const procedure = router.get(req.method)

        if (!procedure) {
          throw error('NOT_FOUND', `Method not found: ${req.method}`)
        }

        return procedure(req.params, ctx)
      }
    },
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
