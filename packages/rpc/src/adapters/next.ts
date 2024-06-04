import { fetchHandler, type ServeConfig } from '@/server'
import type { Router } from '../../dist'

/**
 * ```ts
 * const app = router({
 *  ping: procedure().action(() => 'pong'),
 * })
 *
 * export const POST = handle(app)
 *
 * export const POST = handle({
 *  router: app,
 *  context(req) {
 *    return {
 *      user: req.headers.get('user'),
 *    }
 *  }
 * })
 *```
 */
export function handle(router: Router, config: Omit<ServeConfig, 'port'> = {}) {
  return fetchHandler(router, config)
}
