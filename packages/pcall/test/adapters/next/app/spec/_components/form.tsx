'use client'

import { useState, useCallback } from 'react'
import { z } from 'zod'
import { type AppRouter } from '../../../../../mock'
import { Button } from './ui/button'
import { client } from '@/client'
import type { El } from '~/page'

const schema = z.object({
  name: z.string().describe("User's name"),
  age: z.number().default(18).describe('User age'),
  isAdult: z.boolean().default(false).describe('Is user adult'),
})

const api = client<AppRouter>('/api', { logger: true })

export function Form({ method, els }: { method: string; els: El[] }) {
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
    // @ts-ignore
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
      <Button type="submit" className="self-end">
        Submit
      </Button>
      {error && (
        <pre className="bg-red-400/50 text-sm text-red-300 p-2 rounded">
          {JSON.stringify(error, null, 2)}
        </pre>
      )}
      {result && (
        <pre className="text-sm border border-zinc-300/20 p-2 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </form>
  )
}
