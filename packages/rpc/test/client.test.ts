import { expect, test } from 'bun:test'
import { createClient } from '@/client'
import { appRouter } from './router.test'

test('client', () => {
  type AppRouter = typeof appRouter

  const api = createClient<AppRouter>()

  const a1 = api.users.list.exec()
  const a2 = api.users.getById.exec({ id: 1 })
})
