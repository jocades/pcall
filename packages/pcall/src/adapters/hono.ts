import type { Router } from '../router'
import { fetchHandler, type ServeOptions } from '../server'
import { type Context as HonoContext } from 'hono'

export type HonoOptions = Omit<
  ServeOptions,
  'port' | 'endpoint' | 'static' | 'websocket'
>

/**
 * @example
 * ```ts
 * import { Hono } from 'hono'
 * import { router, pc } from '@calap/pcall'
 * import { handle } from '@calap/pcall/hono'
 *
 * const appRouter = router({
 *   ping: pc().action(() => 'Hello RPC!'),
 * })
 *
 * const app = new Hono()
 *
 * app.get('/', (c) => c.text('Hello Hono!')
 * app.use('/rpc', handle(appRouter))
 * ```
 */
export function handle(router: Router, opts?: HonoOptions) {
  const handler = fetchHandler(router, opts)
  return (c: HonoContext) => handler(c.req.raw)
}
