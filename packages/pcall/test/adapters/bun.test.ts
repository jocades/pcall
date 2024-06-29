import { handle } from '@/adapters/bun'
import { app } from '../mock'

export default handle(app, {
  port: 8000,
  context(req) {
    return {
      method: req.method,
    }
  },
})
