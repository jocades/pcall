import { serve } from '@/server'
import { app } from './mock'

const server = serve(app, {
  context(req) {
    return {
      req,
      user: { id: 1 },
    }
  },
})

console.log(`🔥Listening at ${server.url.href.slice(0, -1)}`)
