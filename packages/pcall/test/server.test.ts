import { serve } from '@/server'
import { app } from './mock'

const server = serve(app, {
  context(req) {
    return {
      auth: req.headers.get('x-token'),
    }
  },
})

console.log(`🔥Listening at ${server.url.href.slice(0, -1)}`)
