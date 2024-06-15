import { type Router } from '@/router'
import { app } from '@/../test/mock'
import { main as build } from './build'

function toB64(str: string) {
  return Buffer.from(str).toString('base64')
}

const filename =
  process.env.NODE_ENV === 'production' ? 'bundle.min.js' : 'bundle.js'

await build()
const bundle = Bun.file(`./dist/${filename}`)

console.log('JS', {
  file: filename,
  size: Math.round(bundle.size / 1024) + ' kb',
})

// const js = toB64(await bundle.text())
const js = await bundle.text()

function render(router: Router, opts: { url: string; title?: string }) {
  const title = opts?.title ?? 'RPC Spec'

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <title>${title}</title>
    </head>
    <body class='bg-zinc-700'>
      <script>
        window.__RPC_URL__ = "${opts.url}";
        window.__RPC_ROUTER__ = ${JSON.stringify(router)};
      </script>
      <script>${js}</script>
    </body>
    </html>
  `
}

const server = Bun.serve({
  port: 8000,
  async fetch(req) {
    const url = new URL(req.url)
    console.log(`${req.method} - ${url.pathname}`)

    if (url.pathname === '/ws') {
      if (server.upgrade(req)) {
        return // do not return response
      }
      return new Response('Upgrade failed', { status: 500 })
    }

    if (url.pathname === '/') {
      return new Response(
        render({ test: null }, { url: 'http://localhost:8000' }),
        { headers: { 'content-type': 'text/html' } },
      )
    }

    return new Response('Not found', { status: 404 })
  },
  websocket: {
    open(ws) {},
    close(ws) {},
    message(ws, msg) {
      console.log('FROM CLIENT', msg)
    },
  },
})

console.log('Listening on http://localhost:8000')
