import type { Router } from '@/router'
import { fetchHandler, type ServeOptions } from '@/server'
import { type Context, type Next } from 'hono'

export interface HonoOptions extends Omit<ServeOptions, 'port'> {}

export function handle(router: Router, opts?: HonoOptions) {
  const handler = fetchHandler(router, opts)
  // @ts-expect-error Accept HonoRequest
  return (c: Context) => handler(c.req)
}
