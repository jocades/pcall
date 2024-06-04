import { procedure } from '@/procedure'
import { router } from '@/router'
import { z } from 'zod'

export interface User {
  id: number
  name: string
}

const users: Map<number, User> = new Map(
  Array.from({ length: 50 }, (_, i) => {
    return [
      i + 1,
      {
        id: i + 1,
        name: `User ${i + 1}`,
      },
    ]
  })
)

export const db = {
  users: {
    find: () => Array.from(users.values()),
    findById: (id: number) => users.get(id),
    create: (data: Omit<User, 'id'>) => {
      const user = { ...data, id: users.size + 1 }
      users.set(user.id, user)
      return user
    },
    deleteById: (id: number) => {
      const user = users.get(id)
      users.delete(id)
      return user
    },
  },
}

export const app = router({
  ping: procedure().action(() => 'pong'),
  users: router({
    list: procedure().action(() => db.users.find()),
    getById: procedure()
      .input({ userId: z.number() })
      .action(({ input }) => {
        console.log({ input })
        return db.users.findById(input.userId)
      }),
  }),
})

export type AppRouter = typeof app

export const int = z.string().transform((v) => {
  const n = parseInt(v)
  if (isNaN(n)) throw new Error('Invalid number')
  return n
})

// const what = procedure()
//   .input(int)
//   .action(async (c) => {})

// what('10')
// make a zod schema that takes a string a parse to a vlid number
