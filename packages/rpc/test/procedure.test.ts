import { describe } from 'bun:test'
import { z } from 'zod'
import {
  type ProcedureInput,
  type ProcedureOutput,
  procedure,
  type ProcedureConfig,
} from '@/procedure'

describe('procedure', () => {
  function mw() {
    return { userId: 1 }
  }

  const authed = procedure().use(mw)

  const authedList = authed.action((config) => {
    return { msg: 'list' }
  })

  const list = procedure().action(() => {
    return { msg: 'list' }
  })

  const getById = procedure()
    .meta({ title: 'Get a user by ID' })
    .use(({ ctx }) => ({ userId: 1 }))
    .input(z.object({ id: z.number() }))
    .output(z.object({ plusOne: z.number() }))
    .action(({ input, ctx }) => {
      return { plusOne: input.id + 1 }
    })

  type In = ProcedureInput<typeof getById>
  type Out = ProcedureOutput<typeof getById>
  type Config = ProcedureConfig<typeof getById>
})

procedure()
  .input(z.object({ id: z.number() }))
  .use(({ input, ctx }) => ({ userId: input.id }))
  .use(({ ctx }) => ({ userId: 2, session: 'xxxx' }))
  .output(z.object({ name: z.string() }))
  .action(({ input, ctx }) => ({ name: 'Jordi' }))
