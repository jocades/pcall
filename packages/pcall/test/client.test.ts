import { client } from '@/client'
import { test } from 'bun:test'
import { bench, isFn } from '@/util'
import type { AppRouter } from './mock'
import type { AnyFn } from '@/types'

function pack(...args: { fn: AnyFn; length: number }[]) {
  return args.flatMap(({ fn, length }) => Array.from({ length }, fn))
}

test('client batch', async () => {
  const api = client<AppRouter>('http://localhost:8000/rpc', {
    link: 'batch',
    batch: {
      max: 50,
      timeout: 100,
    },
  })

  const suite = pack(
    {
      fn: () => api.ping(),
      length: 50,
    },
    {
      fn: () => api.users.list(),
      length: 20,
    },
    {
      fn: () => api.users.getById({ userId: 1 }),
      length: 50,
    },
    {
      fn: () => api.users.create({ name: 'Jordi' }),
      length: 20,
    },
    {
      fn: () => api.posts.list(),
      length: 20,
    },
    {
      fn: () => api.posts.getById({ postId: 2 }),
      length: 20,
    },
    {
      fn: () => api.posts.create({ title: 'Jordi', description: 'Desc' }),
      length: 20,
    },
  )

  try {
    const results = await Promise.all(suite)
    console.log('RESULTS', results.length)
  } catch (err) {
    console.error(err)
  }
})

/*
const rounds = 50

async function test() {
  let round = 0
  for (let i = 0; i < rounds; i++) {
    await Promise.all(tests)
    round++
  }
  console.log(round)
}

await bench(test)()

const results = await Promise.all(tests)
for (const result of results) {
  console.log(result)
} */
