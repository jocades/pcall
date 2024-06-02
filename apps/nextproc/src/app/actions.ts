'use server'

import { procedure } from 'rpc/next'
import { z } from 'zod'

function getSession(dont = false) {
  return dont ? null : { user: { id: 1, name: 'John Doe' } }
}

export const getPost = procedure()
  .use(() => {
    const session = getSession()
    if (!session) throw new Error('Unauthorized')
    return { user: session.user }
  })
  .input({ postId: z.number() })
  .output(z.string())
  .action(async (c) => {
    console.log(c.input, c.ctx)
    return 'Hello World!'
  })

// export const action = builder()
