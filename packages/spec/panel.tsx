import { app } from '@/../test/mock'
import { isZodSchema } from '@/procedure'
import type { AnyObject } from '@/types'
import { ZodSchema, z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

const router = app.flat()

const zObject = zodToJsonSchema(
  z.object({
    name: z.string().describe("User's name"),
    age: z.number().default(18).describe('User age'),
    other: z.object({
      age: z.number().default(18).describe('User age'),
      isAdult: z.boolean().default(false).describe('Is user adult'),
    }),
  }),
)

const zString = zodToJsonSchema(z.string().describe("User's name"))

const zArray = zodToJsonSchema(z.array(z.string()).describe("User's name"))

console.log(zObject, '')
/* {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "User's name",
    },
    age: {
      type: "number",
      default: 18,
      description: "User age",
    },
    other: {
      type: "object",
      properties: {
        age: {
          type: "number",
          default: 18,
          description: "User age",
        },
      },
      additionalProperties: false,
    },
  },
  required: [ "name", "other" ],
  additionalProperties: false,
  $schema: "http://json-schema.org/draft-07/schema#",
} */
// console.log(zString, '')

const panel = []

function toHTML(json: any, key?: string) {
  switch (json.type) {
    case 'string': {
      return {
        key,
        type: json.type,
        html: (
          <input
            type="text"
            defaultValue={json.default}
            placeholder={json.description}
            required={json.required}
          />
        ),
      }
    }
    case 'number': {
      return {
        type: json.type,
        key,
        html: (
          <input
            type="number"
            defaultValue={json.default}
            placeholder={json.description}
            required={json.required}
          />
        ),
      }
    }
    case 'boolean': {
      return {
        type: json.type,
        key,
        html: (
          <input
            type="checkbox"
            defaultChecked={json.default}
            placeholder={json.description}
            required={json.required}
          />
        ),
      }
    }
    default: {
      console.error('Unknown type', json.type)
      return null
    }
  }
}

const schema = Object.entries(zObject.properties).map(([key, value]) => {
  return toHTML(value, key)
})

console.log(schema)
