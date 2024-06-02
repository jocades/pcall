import { useState } from 'preact/hooks'
import { initRPC, client } from 'rpc'

import { z } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'

interface User {
  id: number
  name: string
  age: number
}

const db: { users: User[] } = {
  users: [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ],
}

const { procedure, router } = initRPC().build()

const app = router({
  ping: procedure().action(() => 'pong'),
  users: router({
    list: procedure().action(() => db.users),
    getById: procedure()
      .input(z.number().describe('The ID of the user to fetch'))
      .action(({ input }) => {
        return db.users.find((user) => user.id === input)
      }),
  }),
})

const input = app.$def.users.$def.getById.$input
// console.log(input)

const jsonSchema = zodToJsonSchema(input)
console.log(jsonSchema)

const api = client<typeof app>({ url: '/api' })

export function App() {
  const [data, setData] = useState<User[]>()
  const [input, setInput] = useState<any>()

  async function onSubmit() {
    const data = await api.users.list()
    setData(data)
  }

  return (
    <main className="relative flex flex-col min-h-screen max-w-3xl mx-auto">
      <div className="p-2 bg-blue-200 flex flex-col">
        {Array.from(app.flat()).map(([key, value]) => {
          const path = key.split('.')
          const proc = path.pop()

          // @ts-ignore
          let type = zodToJsonSchema(value.$input)?.type as string | undefined
          console.log(type)

          // if (input instanceof z.ZodNumber) {
          //   type = 'number'
          // } else if (input instanceof z.ZodString) {
          //   type = 'string'
          // } else if (input instanceof z.ZodObject) {
          //   type = 'object'
          // } else if (input instanceof z.ZodArray) {
          //   type = 'array'
          // } else {
          // }

          return (
            <div className="p-2 bg-blue-100">
              <h3 className="text-lg font-bold">{path.join('.')}</h3>
              <h3 className="text-lg font-bold">{proc}</h3>
              <form
                onSubmit={async () => {
                  const data = await value(input)
                  setData(data)
                }}
              >
                {type && (
                  <input
                    type={type}
                    onInput={(e) => setInput(e.currentTarget.value)}
                  />
                )}
                <button type="submit">Submit</button>
              </form>
              {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
          )
        })}
        {/* <h3 className="text-lg font-bold"> */}
        {/*   {Array.from(r.keys())[1].split('.').at(-1)} */}
        {/* </h3> */}
        {/* <h3 className="text-lg font-bold">Procedure</h3> */}
      </div>
    </main>
  )
}
