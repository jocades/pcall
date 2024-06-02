import { test } from 'bun:test'
import { client } from '@/client'
import { type AppRouter } from './router.test'

test('client', async () => {
  const api = client<AppRouter>({
    url: 'http://localhost:8000',
  })
  const r1 = await api.users.getById({ id: 1 })
})
