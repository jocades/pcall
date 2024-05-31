import { factory } from '@/caller'
import { initRPC } from '@/rpc'
import { z } from 'zod'

interface Context {
  user: { id: number }
}

const { router, procedure } = initRPC().context<Context>().build()

const root = router({
  users: router({
    getById: procedure()
      .input(z.object({ id: z.number() }))
      .action(({ input, ctx }) => {
        console.log('== action ==', { input, ctx })
        return { name: 'Jordi' }
      }),
  }),
})

const caller = factory(root)
const api = caller({ user: { id: 1 } })

const r1 = api.users.getById({ id: 1 })
console.log({ r1 })
