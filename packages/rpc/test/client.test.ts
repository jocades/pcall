import { client } from '@/client'
import { bench } from '@/util'
import type { AppRouter } from './mock'

const api = client<AppRouter>({ url: 'http://localhost:8000' })

await api.users.getById({ userId: 2 })

// run in promise.all

const tests = [api.ping(), api.users.list(), api.users.getById({ userId: 2 })]

const rounds = 50

async function test() {
  let round = 0
  for (let i = 0; i < rounds; i++) {
    await Promise.all(tests)
    round++
  }
  console.log(round)
}

// await bench(test)()

const results = await Promise.all(tests)
for (const result of results) {
  console.log(result)
}
