import { router, procedure } from 'rpc'
import { handle } from '../../../../../../dist/src/adapters/next'

const app = router({
  ping: procedure().action(() => 'pong'),
})

export const POST = handle(app)
