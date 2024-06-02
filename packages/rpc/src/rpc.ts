import { router } from './router'
import { ProcedureBuilder } from './procedure'
import { handle, serve } from './server'
import { RPCError } from './error'

export class RPC<C> {
  router = router
  procedure = () => ProcedureBuilder.default<C>()

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
