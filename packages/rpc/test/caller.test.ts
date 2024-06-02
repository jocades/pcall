import { factory } from '@/caller'
import { RPC, initRPC } from '@/rpc'
import type { Use } from '@/types'
import { z } from 'zod'

function getUser(): { id: number } | null {
  return null
}

async function context() {
  const user = getUser()
  return { user }
}

type Context = Use<typeof context>

const { router, procedure } = initRPC().context<Context>().build()

const root = router({
  users: router({
    list: procedure()
      .use(({ ctx }) => {
        if (!ctx.user) {
          throw new RPC.Error('UNAUTHORIZED', 'Unauthorized')
        }
        return ctx
      })
      .action(({ ctx }) => {
        return { msg: 'list' }
      }),
    getById: procedure()
      .input(z.object({ id: z.number() }))
      // .output(z.object({ name: z.string() }))
      .action(({ input, ctx }) => {
        console.log('== action ==', { input, ctx })
        return { name: 'Jordi' }
      }),
  }),
})

const caller = factory(root)
const apiA = caller({ user: { id: 1 } })
const apiB = caller({ user: null })

const rA = apiA.users.list()
const rB = apiB.users.list()

console.log('== rA ==', rA)
console.log('== rB ==', rB)
