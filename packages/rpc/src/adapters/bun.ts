import type { Serve } from 'bun'
import { fetchHandler, type ServeConfig } from '../server'
import type { Router } from '@/router'

export function handle(router: Router, config: ServeConfig = {}): Serve {
  return {
    port: config.port ?? 8000,
    fetch: fetchHandler(router, config),
  }
}
