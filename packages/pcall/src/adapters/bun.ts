import type { Serve } from 'bun'
import type { Router } from '../router'
import { fetchHandler, type ServeConfig } from '../server'

export function handle(router: Router, config?: ServeConfig): Serve {
  return {
    port: config?.port ?? 8000,
    fetch: fetchHandler(router, config),
  }
}
