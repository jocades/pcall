import type { AnyConfig, AnyMiddleware, Config } from '@/procedure'

function pipe<T extends AnyConfig>(middlewares: AnyMiddleware[]) {
  return (input: T) => middlewares.reduce((acc, mw) => mw(acc), input)
}

function logMw(opts: { ctx: { name: string } }) {
  console.log('logMw', opts)
  return opts
}

function upperMw(opts: { ctx: { name: string } }) {
  console.log('upperMw', opts)
  opts.ctx.name = opts.ctx.name.toUpperCase()
  return opts
}

const chain = pipe([logMw, upperMw])

const result = chain({ ctx: { name: 'jordi' } })
console.log({ result })
