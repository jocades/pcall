'use server'

import { procedure } from 'rpc'
import { z } from 'zod'

export const getUser = procedure()
  .input({ userId: z.number() })
  .output(z.string())
  .action(async (input) => {
    console.log('FROM SERVER')
    console.log({ input })
    return 'Hello, World!'
  })

// export const action = builder()
