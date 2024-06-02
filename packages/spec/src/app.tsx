import { useState } from 'react'
import { type Router } from 'rpc'

interface Props {
  url: string
  router: Router
}

export default function App({ url, router }: Props) {
  const [count, setCount] = useState(0)

  console.log('App rendered', { url, router })

  return (
    <main>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Component user="world" />
      <pre>{JSON.stringify(router, null, 2)}</pre>
    </main>
  )
}

function Component(props: { user: string }) {
  return <p style={{ color: 'red' }}>Hello {props.user}!</p>
}
