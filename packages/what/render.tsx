import { $ } from 'bun'
import { render } from './jsx'

function Button(props: { className: string; children: any }) {
  return <button className={props.className}>{props.children}</button>
}

function App() {
  return (
    <main>
      Hello World!
      <Button className="btn">Click me</Button>
    </main>
  )
}

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
  // @ts-ignore
  body: render(<App />),
})

/* console.log('== raw ==')
console.log(content) */

await Bun.write('index.html', content)

const prettier = '~/.local/share/nvim/mason/bin/prettierd'
const fmt = await $`cat index.html | ${prettier} index.html`.text()

/* console.log('== fmt ==')
console.log(fmt) */

await Bun.write('index.html', fmt)
