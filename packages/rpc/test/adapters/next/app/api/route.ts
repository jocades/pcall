import { router, procedure } from 'rpc'
import { handle } from '@/adapters/next'

const app = router({
  ping: procedure().action(() => 'pong'),
})

export const POST = handle(app)
