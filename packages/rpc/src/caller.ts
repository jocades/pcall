import { createRecursiveProxy } from './proxy'
import type { Router } from './router'
import type { rpc } from './types'

export function createCaller<T extends Router>(router: T) {
  return createRecursiveProxy(function self(path, args) {}, []) as rpc.infer<T>
}

// const caller = createCaller()
