Bun.serve({
  port: 8001,
  async fetch(req) {
    const url = new URL(req.url)
    console.log(`${req.method} - ${url.pathname}`)

    if (url.pathname === '/') {
      return new Response('Hello, world!')
    }

    return new Response('Not found', { status: 404 })
  },
})

console.log('Listening on http://localhost:8000')
