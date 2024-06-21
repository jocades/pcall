import { expect, test } from 'bun:test'
import { RPCError } from '..'
import { postSchema, db, strInt } from './mock'
import { pc } from '..'
import { z } from 'zod'

const user = {
  id: 1,
  name: 'John',
  role: 'admin',
}

async function getSession(dont = false) {
  return dont ? null : { user }
}

async function auth() {
  const session = await getSession()
  if (!session) throw new Error('Unauthorized')
  return { user: session.user }
}

// @ts-ignore
function admin({ env }) {
  if (env.user.role !== 'admin') {
    throw new Error('Forbidden')
  }
  return env
}

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

test('middleware', async () => {
  await pc()
    .use(auth)
    .action((c) => {
      expect(c.env.user).toBe(user)
    })()

  await pc()
    .use(auth)
    .use(admin)
    .action((c) => {
      expect(c.env.user).toBe(user)
    })()
})

test('reused middleware', async () => {
  const authed = pc().use(auth)

  await authed.action((c) => {
    expect(c.env.user).toBe(user)
  })()

  const one = authed.input({ val: z.number() }).action((c) => {
    expect(c.env.user).toBe(user)
    return c.input.val
  })

  const two = authed.input({ val: z.string() }).action((c) => {
    expect(c.env.user).toBe(user)
    return c.input.val
  })

  expect(await one({ val: 1 })).toBe(1)
  expect(await two({ val: 'str' })).toBe('str')

  const admined = authed.use(admin)

  await admined.action((c) => {
    expect(c.env.user).toBe(user)
  })()
})
