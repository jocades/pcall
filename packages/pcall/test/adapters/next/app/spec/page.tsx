'use client'

import { client } from '@/client'
import type { AppRouter } from '@/../test/mock'
import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

import { type Router } from '@/router'
import { Fragment, useState, useCallback } from 'react'
import { app } from '../../../../mock'
import { isZodSchema } from '@/procedure'
import { Dashboard } from './_components/block'

// declare global {
//   interface Window {
//     __RPC_URL__: string
//     __RPC_ROUTER__: Router
//   }
// }

// const { __RPC_URL__: url, __RPC_ROUTER__: router } = window

const url = 'http://localhost:8000'
const router = { test: null }

const schema = z.object({
  name: z.string().describe("User's name"),
  age: z.number().default(18).describe('User age'),
  isAdult: z.boolean().default(false).describe('Is user adult'),
})

function toHTML(type: string, key?: string) {
  switch (type) {
    case 'string': {
      return {
        key,
        type,
        html: (onInput: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
          <input id={key} type="text" onChange={onInput} />
        ),
      }
    }
    case 'number': {
      return {
        key,
        type,
        html: (onInput: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
          <input id={key} type="number" onChange={onInput} />
        ),
      }
    }
    case 'boolean': {
      return {
        key,
        type,
        html: (onInput: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
          <input id={key} type="checkbox" onChange={onInput} />
        ),
      }
    }
    default: {
      console.error('Unknown type', type)
      return null
    }
  }
}

// const panel = Object.entries(zodToJsonSchema(schema).properties).map(
//   ([key, value]) => toHTML(value.type, key),
// )
//

interface Panel {
  [key: string]: El[]
}

interface El {
  key: string
  type: string
  html: (
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ) => JSX.Element
}

function generatePanel() {
  const panel: Panel = {}

  for (const [k, v] of app.flat()) {
    if (isZodSchema(v.$input)) {
      panel[k] = Object.entries(zodToJsonSchema(v.$input).properties).map(
        ([key, value]) => toHTML(value.type, key),
      )
    }
  }

  return panel
}

const panel = generatePanel()

const api = client<AppRouter>('/api', { logger: true })

const coerce = {
  // string: (v: unknown) => String(v),
  number: (v: unknown) => Number(v),
  // boolean: (v: unknown) => Boolean(v),
}

export default function SpecPage() {
  return <Dashboard />
  return (
    <main className="relative flex flex-col min-h-screen container mx-auto py-24">
      {Object.entries(panel).map(([method, els]) => {
        return <Form key={method} method={method} els={els} />
      })}
    </main>
  )
}

function Form({ method, els }: { method: string; els: El[] }) {
  const [state, setState] = useState({})
  const [result, setResult] = useState()
  const [error, setError] = useState()

  const onInput = useCallback((key: string, value: unknown) => {
    setState((prev) => ({ ...prev, [key]: value }))
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(undefined)
    setResult(undefined)
    console.log('Submit', state)
    let call = method.split('.').reduce((acc, k) => acc[k], api)
    try {
      // @ts-ignore
      const result = await call(state)
      setResult(result)
    } catch (err: any) {
      setError(err)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-4 border border-gray-200 p-4 rounded-md"
    >
      <h2 className="tracking-tight font-normal text-lg underline underline-offset-4">
        {method}
      </h2>
      {els.map((el) => {
        return (
          <div key={el.key} className="flex flex-col gap-y-1">
            <label htmlFor={el.key}>{el.key}</label>
            {el.html((e) =>
              onInput(
                el.key,
                el.type === 'number'
                  ? Number(e.target.value)
                  : e.target[el.type === 'boolean' ? 'checked' : 'value'],
              ),
            )}
          </div>
        )
      })}
      <button type="submit" className="self-end">
        Submit
      </button>
      {error && (
        <pre className="bg-red-400/50 text-sm text-red-300 p-2 rounded">
          {JSON.stringify(error, null, 2)}
        </pre>
      )}
      {result && (
        <pre className="bg-zinc-400/50 text-sm text-zinc-300 p-2 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </form>
  )
}
