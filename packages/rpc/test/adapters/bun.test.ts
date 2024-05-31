import { RPC } from '@/rpc'
import { appRouter } from '../router.test'

RPC.serve({
  router: appRouter,
  context(req) {
    return {
      method: req.method,
    }
  },
})

/* export default handle({
  port: 8000,
  router: appRouter,
  context(req) {
    return {
      method: req.method,
    }
  },
}) */
