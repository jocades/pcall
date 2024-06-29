import { serve } from '@/server'
import { app } from './mock'
import { io } from './socket.test'
import { cors } from '@/http'

const server = serve(app, {
  port: 8000,
  endpoint: '/rpc',
  headers: cors(),
  websocket: io.handler(),
  static: {
    dir: `${__dirname}/static`,
    fallback: 'not-found.html',
  },
  context(req) {
    return {
      token: req.headers.get('x'),
    }
  },
  onError(err) {
    console.log('onError()', err.message)
  },
  notFound(c) {
    c.status(404)
    return c.text('Not Found')
  },
})

console.log(`🔥Listening at ${server.url.href.slice(0, -1)}`)
