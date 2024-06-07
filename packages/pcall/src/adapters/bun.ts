import type { Serve } from 'bun'
import type { Router } from '../router'
import { fetchHandler, type ServeOptions } from '../server'

export function handle(router: Router, opts?: ServeOptions): Serve {
  return {
    port: opts?.port ?? 8000,
    fetch: fetchHandler(router, opts),
  }
}
