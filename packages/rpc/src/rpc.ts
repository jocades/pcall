import { router } from '@/router'
import { ProcedureBuilder } from '@/procedure'
import { handle, serve } from '@/server'

export class RPC<C> {
  router = router
  procedure = () => ProcedureBuilder.default<C>()

  static handle = handle
  static serve = serve
}

class RPCBuilder<C> {
  context<T extends C>(): RPCBuilder<T> {
    return this as any
  }

  build(): RPC<C> {
    return new RPC()
  }
}

export function initRPC() {
  return new RPCBuilder()
}
