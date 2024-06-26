import type { Serve } from 'bun'
import type { Router } from '../router'
import { fetchHandler, type ServeOptions } from '../server'

export function handle(router: Router, opts?: ServeOptions) {
  return {
    port: opts?.port ?? 8000,
    fetch: fetchHandler(router, opts),
    websocket: opts?.websocket,
  } satisfies Serve
}
