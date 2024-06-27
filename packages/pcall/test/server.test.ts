import { cors, serve } from '@/server'
import { app } from './mock'
import { io } from './socket.test'

const staticDir = `${__dirname}/../static`

async function build() {
  console.log('Building...')
  const result = await Bun.build({
    entrypoints: [`${staticDir}/main.ts`],
    outdir: staticDir,
    naming: `[dir]/bundle.[ext]`,
  })

  if (!result.success) {
    for (const message of result.logs) {
      console.error(message)
    }
    throw new Error('Build failed')
  }
}

const server = serve(app, {
  port: 8000,
  endpoint: '/rpc',
  headers: cors(),
  websocket: io.handler(),
  static: {
    dir: `${__dirname}/../static`,
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
  onNotFound(c) {
    c.status(404)
    return c.text('Not Found')
  },
})

console.log(`🔥Listening at ${server.url.href.slice(0, -1)}`)
