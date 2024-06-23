import { serve } from '@/server'
import { app } from './mock'

const server = serve(app, {
  port: 8000,
  context(req) {
    return {
      token: req.headers.get('x'),
    }
  },
})

console.log(`🔥Listening at ${server.url.href.slice(0, -1)}`)
