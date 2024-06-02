import { RPC, initRPC } from '@/rpc'
import { app } from './router.test'
import { serve } from '..'
import type { Use } from '@/types'

// RPC.serve({
//   router: appRouter,
//   context(req) {
//     return {
//       method: req.method,
//     }
//   },
// })

async function context() {
  return {
    user: { id: 1 },
  }
}

type Context = Use<typeof context>

const r = initRPC().context<Context>().build()

const root = r.router({
  ping: r.procedure().action(() => 'pong'),
})
