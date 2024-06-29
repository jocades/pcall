import type { Serve } from 'bun'

function html({ body, scripts }: { body: string; scripts?: string[] }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>
        ${body}
        ${scripts?.map((code) => `<script>${code}</script>`).join('\n') ?? ''}
      </body>
    </html>
`
}

const content = html({
  body: '<div id="app"></div>',
  scripts: [await Bun.file(`${__dirname}/dist/bundle.js`).text()],
})

export default {
  port: 8000,
  fetch(req) {
    const { pathname } = new URL(req.url)

    if (pathname === '/mount') {
      return new Response(content, {
        headers: { 'content-type': 'text/html' },
      })
    }

    return new Response(Bun.file(`${__dirname}/index.html`), {
      headers: { 'content-type': 'text/html' },
    })
  },
} satisfies Serve
