import { procedure } from '@/procedure'
import { router } from '@/router'
import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
})

export type User = z.infer<typeof userSchema>
export type Post = z.infer<typeof postSchema>

const users: Map<number, User> = new Map(
  Array.from({ length: 20 }, (_, i) => {
    return [
      i + 1,
      {
        id: i + 1,
        name: `User ${i + 1}`,
      },
    ]
  }),
)

const posts: Map<number, Post> = new Map(
  Array.from({ length: 20 }, (_, i) => {
    return [
      i + 1,
      {
        id: i + 1,
        title: `Post ${i + 1}`,
      },
    ]
  }),
)

export const db = {
  users: {
    find: (opts: { limit?: number } = {}) => {
      const arr = Array.from(users.values())
      return opts.limit ? arr.slice(0, opts.limit) : arr
    },
    create: (data: Omit<User, 'id'>) => {
      const user = { ...data, id: users.size + 1 }
      users.set(user.id, user)
      return user
    },
    findById: (id: number) => users.get(id),
    deleteById: (id: number) => {
      const user = users.get(id)
      users.delete(id)
      return user
    },
  },
  posts: {
    find: (opts: { limit?: number } = {}) => {
      const arr = Array.from(posts.values())
      return opts.limit ? arr.slice(0, opts.limit) : arr
    },
    create: (data: Omit<Post, 'id'>) => {
      const post = { ...data, id: posts.size + 1 }
      posts.set(post.id, post)
      return post
    },
    findById: (id: number) => posts.get(id),
    deleteById: (id: number) => {
      const post = posts.get(id)
      posts.delete(id)
      return post
    },
  },
}

export const usersRouter = router({
  list: procedure().action(() => db.users.find()),
  create: procedure()
    .input({ name: z.string() })
    .action(({ input }) => db.users.create({ name: input.name })),
  getById: procedure()
    .input({ userId: z.number() })
    .action(({ input }) => db.users.findById(input.userId)),
  deleteById: procedure()
    .input({ userId: z.number() })
    .action(({ input }) => db.users.deleteById(input.userId)),
})

export const postsRouter = router({
  list: procedure().action(() => db.posts.find()),
  create: procedure()
    .input({ title: z.string(), description: z.string() })
    .action(({ input }) => db.posts.create({ title: input.title })),
  getById: procedure()
    .input({ postId: z.number() })
    .action(({ input }) => db.posts.findById(input.postId)),
  deleteById: procedure()
    .input({ postId: z.number() })
    .action(({ input }) => db.posts.deleteById(input.postId)),
})

export const app = router({
  ping: procedure().action(() => 'pong'),
  users: usersRouter,
  posts: postsRouter,
})

export type AppRouter = typeof app

export const strInt = z.string().transform((v) => {
  const n = parseInt(v)
  if (isNaN(n)) throw new Error('Invalid number')
  return n
})
