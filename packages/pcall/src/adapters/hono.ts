import type { Router } from '../router'
import { fetchHandler, type ServeOptions } from '../server'
import { type Context as HonoContext } from 'hono'

export interface HonoOptions extends Omit<ServeOptions, 'port'> {}

export function handle(router: Router, opts?: HonoOptions) {
  const handler = fetchHandler(router, opts)
  // @ts-expect-error Accept HonoRequest
  return (c: HonoContext) => handler(c.req)
}
