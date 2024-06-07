import type { Router } from '@/router'
import { RPCRequest, RPCResponse } from '@/rpc'
import { fetchHandler, type ServeOptions } from '@/server'
import { type Context, Hono, type Next } from 'hono'
import { app } from '../mock'
import { logger } from 'hono/logger'

const hono = new Hono()

hono.use(logger())

hono.get('/', (c) => {
  return c.text('Hello Hono!')
})

interface HonoOptions extends Omit<ServeOptions, 'port'> {}

function handle(router: Router, opts: HonoOptions = {}) {
  const handler = fetchHandler(router, opts)

  // @ts-expect-error Accept HonoRequest
  return (c: Context) => handler(c.req)
}

hono.use('/rpc', handle(app))

export default {
  port: 8000,
  fetch: hono.fetch,
}
