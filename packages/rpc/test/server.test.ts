import { RPC } from '@/rpc'
import { appRouter } from './router.test'

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

const newUser = db.users.create({ name: 'Pepe' })
console.log(users, newUser)
const deletedUser = db.users.deleteById(2)
console.log(users, deletedUser)

RPC.serve({
  router: appRouter,
  context: {
    db,
    user: { id: 1 },
  },
})
