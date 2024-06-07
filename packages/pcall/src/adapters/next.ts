import type { Router } from '../router'
import { fetchHandler, type ServeOptions } from '../server'

/**
 * @example
 * ```ts
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
export function handle(router: Router, opts?: Omit<ServeOptions, 'port'>) {
  return fetchHandler(router, opts)
}
