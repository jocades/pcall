// import { RPC, initRPC } from '@/rpc'
// import { app } from './router.test'
import { procedure } from '@/procedure'
import { router } from '@/router'
import { serve } from '@/server'
import { z } from 'zod'

interface User {
  id: number
  name: string
}

const users: User[] = [
  { id: 1, name: 'Jordi' },
  { id: 2, name: 'Maria' },
]

export const db = {
  users: {
    find: () => users,
    findById: (id: number) => users.find((u) => u.id === id),
    create: (data: Omit<User, 'id'>) => {
      const user = { ...data, id: users.length + 1 }
      users.push(user)
      return user
    },
    deleteById: (id: number) => {
      const index = users.findIndex((u) => u.id === id)
      if (index === -1) return null
      return users.splice(index, 1)[0]
    },
  },
}

// const { router, procedure } = initRPC().build()

const app = router({
  ping: procedure().action(async () => 'pong'),
  users: router({
    list: procedure().action(async () => db.users.find()),
    getById: procedure()
      .input(z.number().describe('The ID of the user to fetch'))
      .action(async ({ input }) => {
        console.log({ input })
        return db.users.findById(input)
      }),
  }),
})

const server = serve({
  router: app,
  context(req) {
    return {
      req,
      user: { id: 1 },
    }
  },
})

console.log(`🔥Listening at ${server.url.href.slice(0, -1)}`)
