import { client } from '@/client'
import { bench, isFn } from '@/util'
import type { AppRouter } from './mock'
import type { AnyFn } from '@/types'

const api = client<AppRouter>('http://localhost:8000/rpc', {
  link: 'batch',
  batch: {
    max: 50,
    timeout: 100,
  },
})

function pack(...args: { fn: AnyFn; length: number }[]) {
  return args.flatMap(({ fn, length }) => Array.from({ length }, fn))
}

try {
  const suite = pack(
    {
      fn: () => api.ping(),
      length: 1,
    },
    {
      fn: () => api.users.getById({ userId: 1 }),
      length: 1,
    },
    // {
    //   fn: () => api.users.create({ name: 'Jordi' }),
    //   length: 20,
    // },
    // {
    //   fn: () => api.posts.list(),
    //   length: 20,
    // },
    // {
    //   fn: () => api.posts.getById({ postId: 2 }),
    //   length: 10,
    // },
    // {
    //   fn: () => api.posts.create({ title: 'Jordi' }),
    //   length: 10,
    // },
  )
  const results = await Promise.all(suite)
  console.log('RESULTS', results.length)
} catch (err) {
  console.error(err)
}

/* await api.users.getById({ userId: 2 })


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
