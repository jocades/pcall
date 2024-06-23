import type { Router } from '../router'
import { fetchHandler, type ServeOptions } from '../server'

/**
 * @example
 * ```ts
 * import { router, pc } from '@calap/pcall'
 * import { handle } from '@calap/pcall/next'
 *
 * const app = router({
 *   ping: pc().action(() => 'pong'),
 * })
 *
 * export const POST = handle(app, {
 *   context(req) {
 *     return {
 *       token: req.headers.get('x'),
 *     }
 *   },
 * })
 *```
 */
export function handle(
  router: Router,
  opts?: Omit<ServeOptions, 'port' | 'endpoint'>,
) {
  return fetchHandler(router, opts)
}
