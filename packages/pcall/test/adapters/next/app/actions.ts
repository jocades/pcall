'use server'

import { z } from 'zod'
import { procedure as pc } from '@/procedure'
import { postSchema, db, strInt } from '@/../test/mock'

function sleep(sec: number) {
  return new Promise((res) => setTimeout(res, sec * 1000))
}

async function getSession(dont = false) {
  return dont
    ? null
    : {
        user: {
          id: 1,
          name: 'John',
          role: 'admin',
        },
      }
}

async function auth() {
  const session = await getSession() // -> { user } | null
  if (!session) throw new Error('Unauthorized')
  return { user: session.user } // infer non-null user
}

// @ts-ignore
function admin({ ctx }) {
  if (ctx.user.role !== 'admin') {
    throw new Error('Forbidden')
  }
  return ctx
}

export const getPosts = pc()
  .use(auth)
  .action(() => db.posts.find())

export const getPost = pc()
  .input({ postId: strInt })
  .output(postSchema)
  .action((c) => {
    const post = db.posts.findById(c.input.postId)
    if (!post) throw new Error('Not found')
    return post
  })

export const createPost = pc()
  .use(auth)
  .input({ title: z.string() })
  .output(postSchema)
  .action(async (c) => {
    await sleep(2)
    return db.posts.create(c.input)
  })
