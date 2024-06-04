import { createProxy } from './proxy'
import { type Router } from './router'
import type { RPCRequest } from './rpc'
import type { DecorateCaller } from './types'

/**
 * Create a caller function for a given router.
 * Pass a context object to the caller to use it in the procedures.
 * Handy for testing.
 *
 * ```ts
 * const caller = factory(appRouter)
 *
 * const apiA = caller({ user: { id: 1 } })
 * const apiB = caller({ user: null })
 *
 * apiA.users.list() // => Ok
 * apiB.users.list() // => Err
 * ```
 *
 * @param router - The router to create the caller for.
 * @returns A caller function.
 */
export function factory<T extends Router>(router: T) {
  const handle = router.init()

  /**
   * Create a proxy object to call the procedures.
   * @param ctx - The context object to pass to the procedures.
   */
  return function caller(ctx?: unknown) {
    return createProxy<DecorateCaller<T['$def']>>((path, args) => {
      const req: RPCRequest = {
        path: path.join('.'),
        body: args[0],
      }
      return handle(req, ctx)
    })
  }
}
