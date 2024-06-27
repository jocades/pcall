import { handle } from '@/adapters/next'
import { app } from '@/../test/mock'

export const POST = handle(app, {
  log: false,
})
