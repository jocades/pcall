import { factory, initRPC } from '../'
import type { Use } from '@/types'
import { app } from './mock'

function getUser(): { id: number } | null {
  return null
}

async function context() {
  const user = getUser()
  return { user }
}

type Context = Use<typeof context>

const { router, procedure } = initRPC<Context>()

const caller = factory(app)
const apiA = caller({ user: { id: 1 } })
const apiB = caller({ user: null })

const rA = await apiA.users.list()
const rB = await apiB.users.list()

console.log('== rA ==', rA.slice(0, 2))
console.log('== rB ==', rB.slice(0, 2))

const xA = await apiA.users.getById({ userId: 2 })
const xB = await apiB.users.getById({ userId: 1 })

console.log('== xA ==', xA)
console.log('== xB ==', xB)
