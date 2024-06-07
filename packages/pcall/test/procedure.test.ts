import { expect, test } from 'bun:test'
import { RPCError } from '..'
import { pc } from '..'
import { z } from 'zod'

test('invalid input', async () => {
  const call = pc()
    .input({ val: z.number() })
    .action(() => {})

  // @ts-expect-error
  const exec = (val: unknown) => call({ val })

  expect(() => exec('string')).toThrow(RPCError)
  expect(call).toThrow(RPCError)
})

test('invalid output', async () => {
  const call = pc()
    .output({ val: z.number() })
    // @ts-expect-error
    .action(() => ({ val: 'string' }))

  expect(call).toThrow(RPCError)
})

test('input schema', async () => {
  const call = pc()
    .input({ val: z.number() })
    .action((c) => c.input.val)

  expect(await call({ val: 1 })).toBe(1)
})

test('output schema', async () => {
  const call = pc()
    .output({ val: z.number() })
    .action(() => ({ val: 1 }))

  expect(await call()).toEqual({ val: 1 })
})

test('nested input schema', async () => {
  const call = pc()
    .input({
      a: z.number(),
      b: z.object({
        c: z.number(),
        d: z.object({ c: z.string() }),
      }),
    })
    .action((c) => c.input.b.d.c)

  expect(await call({ a: 1, b: { c: 2, d: { c: 'string' } } })).toBe('string')
})

test('nested output schema', async () => {
  const call = pc()
    .output({
      a: z.number(),
      b: z.object({
        c: z.number(),
        d: z.object({ c: z.string() }),
      }),
    })
    .action(() => ({ a: 1, b: { c: 2, d: { c: 'string' } } }))

  expect(await call()).toEqual({ a: 1, b: { c: 2, d: { c: 'string' } } })
})
