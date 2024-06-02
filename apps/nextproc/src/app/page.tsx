import { getUser } from './actions'
import { Component } from './component'

export default async function Home() {
  const data = await getUser({ userId: 1 })
  console.log({ data })

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      Server: {data}
      <Component />
    </main>
  )
}
