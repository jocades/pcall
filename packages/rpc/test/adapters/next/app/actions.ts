'use server'

import { z } from 'zod'
import { procedure } from 'rpc'

async function getSession(dont = false) {
  return dont ? null : { user: { id: 1, name: 'John Doe' } }
}

export const getPost = procedure()
  .use(async () => {
    const session = await getSession()
    if (!session) throw new Error('Unauthorized')
    return { user: session.user }
  })
  .input({ postId: z.number() })
  .output(z.string())
  .action(async (c) => {
    console.log(c.input, c.ctx)
    return 'Hello World!'
  })
