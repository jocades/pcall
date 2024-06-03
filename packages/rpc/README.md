# RPC

Remote Procedure Call (RPC) over HTTP with end to end validation and type safety.

- Validate any function's input and output with Zod.
- Use it as a server action in Next.js.
- Use it as a way to compose a router of procedures and handle HTTP requests.

## 1. Installation

```bash
bun install @jcel/rpc zod
```

## 2. Procedure

A procedure is a way to define a function which validates its input and output.

```ts
import { z } from 'zod'
import { procedure } from '@jcel/rpc'

const hello = procedure()
  .input({ name: z.string() })
  .output(z.string())
  .action(({ input }) => `Hello ${input.name}!`)

const result = await hello({ name: 'World' })
```

The input can be a single value or an object.

```ts
procedure().input(z.string()) // single input
procedure().input({ name: z.string() }) // will be wrapped with z.object
procedure().input(z.object({ name: z.string() })) // same as above
```

Guaranteed type safety at compile time and runtime.

- If the input is provided, the input value will be inferred and validated accordingly.

```ts
const hello = procedure()
  .input({ name: z.string() })
  .action(({ input }) => `Hello ${input.name}!`)

hello({ name: 123 }) // error: expected string, got number
```

- If the output is provided, the return value of the action will be inferred and validated accordingly.

```ts
procedure()
  .output(z.string())
  .action(() => 1) // error: expected string, got number
```

Add middlewares to the procedure, the return value will be passed to the next handler's context.

```ts
const getUser = procedure()
  .use(async () => {
    const session = await getSession()
    if (!session) throw new Error('Unauthorized')
    return { user: session.user }
  })
  .action(async ({ ctx }) => {
    // inferred non-null user type
    return await db.users.findById(ctx.user.id)
  })
```

Define a middleware once and reuse it across multiple procedures.

```ts
const authed = procedure().use(async () => {
  const session = await getSession()
  if (!session) throw new Error('Unauthorized')
  return { user: session.user }
})

const hello = authed.action(({ ctx }) => `Hello ${ctx.user}!`)
const bye = authed.action(({ ctx }) => `Bye ${ctx.user}!`)
```

## 2. Next.js

Since server actions are just functions, you can use a procedure as a server action in Next.js.

```ts
'use server'

import { z } from 'zod'
import { procedure } from '@jcel/rpc'
import { db, postSchema } from './db'

export const getPost = procedure()
  .input({ postId: z.coerce.number() }) // parse string to number
  .output(postSchema)
  .action(async (c) => await db.posts.findById(c.input.postId))
```

Then just call it as a regular server action in the server or client to get the result.

```tsx
// app/posts/[id]/page.tsx

export default async function Page({ params }) {
  const post = await getPost({ postId: params.id }) // id is a string from the URL

  return <div>{post.title}</div>
}
```

## 3. Router

Compose procedures using a router and handle HTTP requests.

```ts
import { router, procedure } from '@jcel/rpc'

const usersRouter = router({
  list: procedure().action(async () => await db.users.find()),
  getById: procedure()
    .input({ userId: z.number() })
    .action(async ({ input }) => {
      return await db.users.findById(input.userId)
    }),
})

export const app = router({
  ping: procedure().action(async () => 'pong'),
  users: usersRouter,
})

export type AppRouter = typeof app // export the type for the client (if needed)
```

Serve the router with the standalone server. It uses the Bun server under the hood.

```ts
import { serve } from '@jcel/rpc'
import { app } from './app'

const server = serve({
  port: 8000,
  router: app,
  context(req) {
    return {
      req,
      user: { id: 1 },
    }
  },
})

console.log(`🔥 Listening at ${server.url.href}`)
```

## 4. Client

Create a HTTP client to call the procedures over the network. It uses a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and the standard fetch API.

```ts
import { client } from '@jcel/rpc'
import type { AppRouter } from './server'

const api = client<AppRouter>({ url: 'http://localhost:8000' })

const data = await api.posts.getById({ postId: 1 })
```

## X. Examples

### X.1 Client with React Query

```tsx
import { useQuery } from 'react-query'
import { client } from '@jcel/rpc'
import type { AppRouter } from './server'

const api = client<AppRouter>({ url: 'http://localhost:8000' })

export function Posts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => api.posts.list(),
  })
  // ...
}
```
