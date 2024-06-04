import type { Router } from '@/router'
import { fetchHandler, type ServeConfig } from '@/server'

/**
 * ```ts
 * const app = router({
 *   ping: procedure().action(() => 'pong'),
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
export function handle(router: Router, config?: Omit<ServeConfig, 'port'>) {
  return fetchHandler(router, config)
}
