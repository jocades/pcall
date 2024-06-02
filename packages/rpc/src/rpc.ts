import { router } from './router'
import { handle, serve } from './server'
import { RPCError } from './error'
import { procedure } from './procedure'

export class RPC<C> {
  router = router
  procedure = () => procedure<C>()

  static handle = handle
  static serve = serve

  static Error = RPCError
}

export function initRPC() {
  return new RPCBuilder()
}

class RPCBuilder<C> {
  context<T extends C>(): RPCBuilder<T> {
    return this as any
  }

  build(): RPC<C> {
    return new RPC()
  }
}
