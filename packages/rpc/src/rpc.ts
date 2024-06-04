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
