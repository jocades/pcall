import type { Serve } from 'bun'

const js = await Bun.file(`${__dirname}/dist/bundle.js`).text()

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <div id="app"></div>
    <script>${js}</script>
  </body>
</html>
`

export default {
  port: 8000,
  fetch() {
    return new Response(html, {
      headers: { 'content-type': 'text/html' },
    })
  },
} satisfies Serve
