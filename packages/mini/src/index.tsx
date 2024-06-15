import { Fragment, render } from 'preact'
import { useState } from 'preact/hooks'

import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

import { type Router } from '@/router'

declare global {
  interface Window {
    __RPC_URL__: string
    __RPC_ROUTER__: Router
  }
}

const { __RPC_URL__: url, __RPC_ROUTER__: router } = window

const schema = zodToJsonSchema(
  z.object({
    name: z.string().describe("User's name"),
    age: z.number().default(18).describe('User age'),
    isAdult: z.boolean().default(false).describe('Is user adult'),
  }),
)

function toHTML(type: string, key?: string) {
  switch (type) {
    case 'string': {
      return {
        key,
        type,
        html: (onInput: (e: Event) => void) => (
          <input id={key} type="text" onInput={onInput} />
        ),
      }
    }
    case 'number': {
      return {
        key,
        type,
        html: (onInput: (e: Event) => void) => (
          <input id={key} type="number" onInput={onInput} />
        ),
      }
    }
    case 'boolean': {
      return {
        key,
        type,
        html: (onInput: (e: Event) => void) => (
          <input id={key} type="checkbox" onInput={onInput} />
        ),
      }
    }
    default: {
      console.error('Unknown type', type)
      return null
    }
  }
}

console.log(schema)

const panel = Object.entries(schema.properties).map(([key, value]) => {
  return toHTML(value.type, key)
})

console.log(panel)

function App() {
  console.log('App rendered', { url, router })
  const [state, setState] = useState({})

  function onInput(key: string, e: Event) {
    setState((prev) => ({ ...prev, [key]: e.target!.value }))
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(state)
        }}
        class="flex flex-col gap-y-4"
      >
        {panel.map((el) => {
          return (
            <div class="flex">
              <label for={el.key}>{el.key}</label>
              {el.html((e) => {
                setState((prev) => ({ ...prev, [el.key]: e.target.value }))
              })}
            </div>
          )
        })}
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

render(<App />, document.body)
