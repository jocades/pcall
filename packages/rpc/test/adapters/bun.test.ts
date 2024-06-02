import { app } from '../router.test'
import { handle } from '@/adapters/bun'

export default handle({
  port: 8000,
  router: app,
  context(req) {
    return {
      method: req.method,
    }
  },
})
