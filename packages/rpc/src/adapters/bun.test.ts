import { appRouter } from '../../test/router.test'
import { serve, handle } from '@/adapters/bun'

// serve({
//   router: appRouter,
//   context(req) {
//     return {
//       method: req.method,
//     }
//   },
// })

export default handle({
  port: 8000,
  router: appRouter,
  context(req) {
    return {
      method: req.method,
    }
  },
})
