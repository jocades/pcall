import { router, type FlatRouter } from './router'
import { error } from './error'
import { procedure } from './procedure'

export interface RPCRequest {
  path: string
  body: unknown
}

export interface RPCResponse<T> {
  data: T
}

export function initRPC<C>() {
  return {
    router,
    procedure: () => procedure<C>(),
  }
}

// export class RPC<C> {
//   router = router
//   procedure = () => procedure<C>()

//   static handle = handle
//   static serve = serve

//   static Error = RPCError
// }

// export function initRPC() {
//   return new RPCBuilder()
// }

// class RPCBuilder<C> {
//   context<T extends C>(): RPCBuilder<T> {
//     return this as any
//   }

//   build(): RPC<C> {
//     return new RPC()
//   }
// }
