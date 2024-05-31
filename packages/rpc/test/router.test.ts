import { flattenRouter, router } from '@/router'
import { procedure } from '@/procedure'
import { z } from 'zod'
import { handle } from '@/rpc'

const users = router({
  list: procedure()
    .output(z.object({ msg: z.string() }))
    .action(({ ctx }) => {
      return { msg: 'list' }
    }),
  getById: procedure()
    .use(({ ctx }) => {
      console.log('middleware', ctx)
      return { userId: 1 }
    })
    // .use(({ ctx }) => {
    //   console.log('middleware2', ctx)
    //   ctx.userId = 2
    //   return ctx
    // })
    .meta({ title: 'Get user by ID' })
    .input(z.object({ id: z.number() }))
    .output(z.object({ name: z.string() }))
    .action(({ input, ctx }) => {
      console.log('action', { input, ctx })
      return { name: 'Jordi' }
    }),
  // .input(z.object({ id: z.number() }))
  // .action(({ input }) => {
  //   return { plusOne: input.id + 1 }
  // }),
})

export const appRouter = router({
  ping: procedure().action(() => 'Pong!'),
  users: users,
})

const suite = {
  ['users.getById']: {
    input: { id: 1 },
    output: { plusOne: 2 },
  },
  ['users.list']: {
    input: undefined,
    output: { msg: 'list' },
  },
  ['ping']: {
    input: undefined,
    output: 'Pong!',
  },
}

function test() {
  const routes = flattenRouter(appRouter)

  console.log({ paths: routes.keys() })

  for (let [path, io] of Object.entries(suite)) {
    const result = handle({ path, body: io.input }, routes)
    console.log({ path, io, result })
  }
}

test()