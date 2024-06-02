import { parseInput, parseOutput } from './src/server'
import type { AnyObject } from './src/types'
import { z } from 'zod'

type Resolver<I, O> = (input: Parse<I>) => Promise<O>

type Procedure<I, O> = Resolver<I, O> & {
  // These are just types they dont even exist at runtime
  $input: Parse<I>
  $output: O
}

interface Config<I, O> {
  input: I
  output: O
}

class ProcedureBuilder<I, O> {
  private config: Config<I, O>

  private constructor(config: Config<I, O>) {
    this.config = config
  }

  static default() {
    return new ProcedureBuilder({ input: undefined, output: undefined })
  }

  input<S extends Schema>(schema: S): ProcedureBuilder<S, O> {
    return new ProcedureBuilder({ ...this.config, input: schema })
  }

  output<S extends Schema>(schema: S): ProcedureBuilder<I, S> {
    return new ProcedureBuilder({ ...this.config, output: schema })
  }

  action<R extends O extends undefined ? any : Parse<O>>(
    resolver: Resolver<I, R>,
  ): Procedure<I, R> {
    return Object.assign(async (input: Parse<I>) => {
      input = parseInput(input, this.config.input)
      const result = await resolver(input)
      return parseOutput(result, this.config.output)
    })
  }
}

export function procedure() {
  return ProcedureBuilder.default()
}

const proc = procedure()
  .input(z.object({ in: z.string() }))
  .output({ out: z.number() })
  .action(async () => {
    return { out: 1 }
  })

// console.log(proc.$input)
//
// type I = typeof proc.$input
// type O = typeof proc.$output

const r = await proc({ in: 'hello' })
// console.log(r)

// if input or output is object wrap it in z.object
type ZodAny = z.ZodTypeAny

type Schema = AnyObject<ZodAny> | ZodAny

type Parse<T> = T extends ZodAny
  ? z.infer<T>
  : T extends AnyObject<ZodAny>
    ? z.infer<z.ZodObject<T>>
    : 'INVALID'

// type Parse<T> =
//   T extends AnyObject<ZodAny>
//     ? z.infer<z.ZodObject<T>> // { [K in keyof T]: z.infer<T[K]> }
//     : T extends ZodAny
//       ? z.infer<T>
//       : 'INVALID'

const inObj = { a: z.string() }
const inZod = z.number()
const inZodObj = z.object({ a: z.string() })

const nested = {
  a: z.number(),
  b: z.object({ c: z.string() }),
}

type In = Parse<typeof nested>
type InZod = Parse<typeof inZod>
type InZodObj = Parse<typeof inZodObj>
