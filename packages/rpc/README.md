# RPC

Remote Procedure Call (RPC) over HTTP with end to end validation and type safety.

- Validate any function's input and output with Zod.
- Use it as a server action in Next.js.
- Use it as a way to compose a router of procedures and handle HTTP requests.

## 1. Installation

```bash
bun add @jcel/rpc zod
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

The validator can be a single zod schema or an object of zod schemas.

```ts
procedure().input(z.string()) // single input
procedure().input({ name: z.string() }) // will be wrapped with z.object
procedure().input(z.object({ name: z.string() })) // same as above
```

Guaranteed type safety at compile time and runtime.

- If the input is provided, the input value will be inferred and validated accordingly.

```ts
const hello = procedure()
  .input(z.string())
  .action(() => {})

hello(1) // error: expected string, got number
```

- If the output is provided, the return value of the action will be inferred and validated accordingly.

```ts
procedure()
  .output(z.string())
  .action(() => 1) // error: expected string, got number
```

### 2.1. Middleware

Add middlewares to the procedure to create a chain of actions.<br>
The **return value** of the middleware will be **assigned** to the procedures `context`.

```ts
const getUser = procedure()
  .use(async () => {
    const session = await getSession()
    return { user: session.user }
  })
  .action(async ({ ctx }) => {
    return await db.users.findById(ctx.user.id)
  })
```

Chain middlewares.

```ts
async function auth({ ctx }) {
  const session = await getSession() // -> { user } | null
  if (!session) throw new Error('Unauthorized')
  return { user: session.user } // infer non-null user
}

function admin({ ctx }) {
  if (ctx.user.role !== 'admin') {
    throw new Error('Forbidden')
  }
  return ctx
}

procedure()
  .use(auth)
  .use(admin)
  .action(({ ctx }) => {
    console.log('Admin:', ctx.user.name)
  })
```

Define a middleware once and reuse it across multiple procedures.

```ts
const authed = procedure().use(auth)

const hello = authed.action(({ ctx }) => `Hello ${ctx.user}!`)
const bye = authed.action(({ ctx }) => `Bye ${ctx.user}!`)
```

## 3. Next.js

Since server actions are just functions, you can use a procedure as a server action in Next.js.

```ts
'use server'

import { z } from 'zod'
import { procedure } from '@jcel/rpc'
import { db, postSchema } from './db'
import { auth } from './auth'

export const getPost = procedure()
  .input({ postId: z.coerce.number() })
  .output(postSchema)
  .action(async (c) => await db.posts.findById(c.input.postId))

export const createPost = procedure()
  .use(auth)
  .input({ title: z.string() })
  .output(postSchema)
  .action(async (c) => await db.posts.create(c.input))
```

Call it from a server or client component.

- Server component.

```tsx
// app/posts/[id]/page.tsx

import { getPost } from '@/actions'

export default async function Page({ params }) {
  const post = await getPost({ postId: params.id })

  return <div>{post.title}</div>
}
```

- Client component with React Query.

```tsx
// components/post-form.tsx

'use client'

import { useMutation } from 'react-query'
import { createPost } from '@/actions'

export function PostForm() {
  const [title, setTitle] = useState('')

  const { mutate, error, isPending } = useMutation({
    mutationKey: ['create-post'],
    mutationFn: createPost,
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        mutate({ title })
      }}
    >
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {error && <div>{error.message}</div>}
      <button type="submit" disabled={isPending}>
        Submit
      </button>
    </form>
  )
}
```

## 4. Router

Compose procedures using a router.

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
  ping: procedure().action(() => 'pong'),
  users: usersRouter,
})

// export the type for the client if needed
export type AppRouter = typeof app
```

<!-- ### 4.1. Initialize the router and handle requests.

```ts
import { app } from './app'

// Setup inner machinery.
const handle = app.init()

const req = {
  path: 'users.list',
  body: undefined,
}

// Handle the request.
const result = handle(req)
``` -->

## 5. Server

Serve the router with a standalone server. Powered by the blazing fast [Bun HTTP server](https://bun.sh/docs/api/http).

```ts
import { serve } from '@jcel/rpc'
import { app } from './app'

const server = serve(app)

console.log(`🔥 Listening at ${server.url.href}`)
```

Run the server and call the procedures over the network.

```bash
bun run server.ts

curl -X POST 'localhost:8000?p=ping' # -> pong

curl -X POST 'localhost:8000?p=users.list' # -> [...]
```

### 5.1. Next.js Adapter

Use the router in a Next.js API route.

```ts
import { app } from './app'
import { handle } from '@jcel/rpc/next'

export const POST = handle(app)
```

### 5.2 Options

Customize the server. The context function will be called on every request and pass the return value to the router so it can be accessed in the procedures.

```ts
serve(app, {
  port: 8000,
  context(req) {
    return {
      token: req.headers.get('x'),
    }
  },
})
```

The router can be adapted to any library, framework or service which follows the standard HTTP request and response format.

## 6. Client

Create a client to call the procedures over the network with end to end type safety. It uses a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and the web standard fetch API under the hood.

```ts
import { client } from '@jcel/rpc'
import type { AppRouter } from './server'

const api = client<AppRouter>({ url: 'http://localhost:8000' })

const data = await api.posts.getById({ postId: 1 })
```

The **parameters** and **return type** will be **inferred** from the router type and some TypeScript magic so there is no need to import the router itself in the client side, just the type.

## X. Examples

### X.1. Client with React Query

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
