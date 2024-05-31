import { z } from 'zod'
import { createProxy } from './proxy'
import { flattenRouter, type Router } from './router'
import { RPC, initRPC } from './rpc'
import type { DecorateCaller } from './types'

/**
 * Create a caller function for a given router.
 * Pass a context object to the caller to use it in the procedures.
 * Very handy for testing.
 *
 * @param router - The router to create the caller for.
 * @returns A caller function.
 * ```ts
 * const caller = factory(appRouter)
 * const api = caller({ user: { id: 1 }
 *
 * api.users.getById({ id: 1 })
 * ```
 */
export function factory<T extends Router>(router: T) {
  const flatRouter = router.flat()

  return function caller(ctx?: unknown) {
    return createProxy<DecorateCaller<T['$def']>>((path, args) => {
      const req = {
        path: path.join('.'),
        body: args[0],
      }
      return RPC.handle(req, flatRouter, ctx)
    }, [])
  }
}

interface Context {
  user: { id: number }
}

const { router, procedure } = initRPC().context<Context>().build()

const root = router({
  users: router({
    getById: procedure
      .input(z.object({ id: z.number() }))
      .action(({ input, ctx }) => {
        console.log('== action ==', { input, ctx })
        return { name: 'Jordi' }
      }),
  }),
})

const caller = factory(root)
const api = caller({ user: { id: 1 } })

const r1 = api.users.getById({ id: 1 })
console.log({ r1 })
