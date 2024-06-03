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
   * ```ts
   * const handle = router.init()
   * const result = await handle({ path: 'users.list', body: null })
   * ```
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
      return (req, ctx) => handle(req, router, ctx)
    },
  }
}

export type FlatRouter = Map<string, AnyProcedure>

export async function handle(
  req: RPCRequest,
  router: FlatRouter,
  ctx?: unknown
) {
  const procedure = router.get(req.path)

  if (!procedure) {
    throw error('NOT_FOUND', `Path not found: ${req.path}`)
  }

  try {
    return await procedure(req.body, ctx)
  } catch (err: any) {
    throw error('INTERNAL_SERVER_ERROR', err.message)
  }
}

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
