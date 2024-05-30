import { useState } from 'react'
import { type Router } from 'rpc'

interface Props {
  baseURL: string
  router: Router
}

export default function App(props: Props) {
  const [count, setCount] = useState(0)

  console.log('App rendered', { props })

  return (
    <main>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Component user="world" />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  )
}

function Component(props: { user: string }) {
  return <p style={{ color: 'red' }}>Hello {props.user}!</p>
}
