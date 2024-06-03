import { router } from './router'
import { Builder } from './procedure'

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
    procedure: () => Builder.default<C>(),
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

// export function initRPC<C>() {
//   return new RPCBuilder<C>()
// }

// class RPCBuilder<C> {
//   context<T extends C>(): RPCBuilder<T> {
//     return this as any
//   }
//
//   build() {
//     return {
//       router,
//       procedure:
//     }
//   }
// }
