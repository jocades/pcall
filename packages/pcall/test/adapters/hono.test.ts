import { Hono } from 'hono'
import { app } from '../mock'
import { logger } from 'hono/logger'
import { handle } from '@/adapters/hono'

const hono = new Hono()

// hono.use(logger())

hono.get('/', (c) => {
  return c.text('Hello Hono!')
})

hono.use(async (c, next) => {
  c.set('data', 'Hello, World!')
})

hono.use('/rpc', handle(app))

export default {
  port: 8000,
  fetch: hono.fetch,
}
