import { procedure as pc } from '..'
import { procedure as proc } from '..'
import { procedure } from '..'

const suite = {
  ['users.getById']: {
    input: { id: 1 },
    output: { plusOne: 2 },
  },
  ['users.list']: {
    input: undefined,
    output: { msg: 'list' },
  },
  ['ping']: {
    input: undefined,
    output: 'Pong!',
  },
}

const a = procedure()
  .input({})
  .action(() => {})

const b = proc()
  .input({})
  .action(() => {})

const c = pc()
  .input({})
  .action(() => {})

// pc.input().action(() => {})
// pc().input().action(() => {})

// proc.input().action(() => {})
// proc().input().action(() => {})

// procedure.input().action(() => {})
// procedure().input().action(() => {})

// function test() {
//   const routes = app.flat()
//   console.log({ routes })

//   console.log({ paths: routes.keys() })

//   for (let [path, io] of Object.entries(suite)) {
//     const result = RPC.handle({ path, body: io.input }, routes)
//     console.log({ path, io, result })
//   }
// }

// test()
