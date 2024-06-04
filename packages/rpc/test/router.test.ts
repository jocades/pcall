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
