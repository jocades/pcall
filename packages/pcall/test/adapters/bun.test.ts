import { handle } from '@/adapters/bun'
import { app } from '../mock'
import { cors } from '@/server'

export default handle(app, {
  port: 8000,
  headers: cors(),
  context(req) {
    return {
      method: req.method,
    }
  },
})
