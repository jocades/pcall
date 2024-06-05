import { router } from './router'
import { Builder } from './procedure'
import type { RPCError } from './error'

export interface RPCRequest {
  path: string
  body: unknown
}

export interface RPCResponse<T> {
  data: T
}

/* export class RPCRequest {
  id: string
  jsonrpc = '2.0'
  method: string
  params?: unknown

  constructor(id: string, method: string, params?: unknown) {
    this.id = id
    this.method = method
    this.params = params
  }
}

export class RPCResponse {
  id: string
  jsonrpc = '2.0'
  result: unknown
  error?: RPCError

  constructor(result: unknown, error?: RPCError) {
    this.id = nanoid()
    this.result = result
    this.error = error
  }
} */

/**
 * Genarate a ~unique 12-character string.
 */
export function nanoid() {
  const ts = Date.now().toString(36)
  const rand = Math.random().toString(36).substring(2, 6)
  return ts + rand
}

export function initRPC<C>() {
  return {
    router,
    procedure: () => Builder.default<C>(),
  }
}
