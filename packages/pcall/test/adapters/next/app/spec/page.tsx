'use client'

import { isZodSchema } from '@/procedure'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { Dashboard } from './_components/dashboard'
import { Form } from './_components/form'
import { app } from '../../../../mock'
import { Input } from './_components/ui/input'

// declare global {
//   interface Window {
//     __RPC_URL__: string
//     __RPC_ROUTER__: Router
//   }
// }

// const { __RPC_URL__: url, __RPC_ROUTER__: router } = window

const url = 'http://localhost:8000'
const router = { test: null }

// const panel = Object.entries(zodToJsonSchema(schema).properties).map(
//   ([key, value]) => toHTML(value.type, key),
// )
//

const coerce = {
  // string: (v: unknown) => String(v),
  number: (v: unknown) => Number(v),
  // boolean: (v: unknown) => Boolean(v),
}

export interface Panel {
  [key: string]: El[]
}

export interface El {
  key: string
  type: string
  html: (
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ) => JSX.Element
}

function toHTML(type: string, key?: string) {
  switch (type) {
    case 'string': {
      return {
        key,
        type,
        html: (onInput: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
          <Input id={key} type="text" onChange={onInput} />
        ),
      }
    }
    case 'number': {
      return {
        key,
        type,
        html: (onInput: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
          <Input id={key} type="number" onChange={onInput} />
        ),
      }
    }
    case 'boolean': {
      return {
        key,
        type,
        html: (onInput: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
          <Input id={key} type="checkbox" onChange={onInput} />
        ),
      }
    }
    default: {
      console.error('Unknown type', type)
      return null
    }
  }
}

function generatePanel() {
  const panel: Panel = {}

  for (const [k, v] of app.flat()) {
    if (isZodSchema(v.$input)) {
      // @ts-ignore
      panel[k] = Object.entries(zodToJsonSchema(v.$input).properties).map(
        // @ts-ignore
        ([key, value]) => toHTML(value.type, key),
      )
    }
  }

  return panel
}

const panel = generatePanel()

export default function SpecPage() {
  return <Dashboard panel={panel} />
}
