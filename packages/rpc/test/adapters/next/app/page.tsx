import { getPost } from './actions'
import { Component } from './component'

export default async function Home() {
  const data = await getPost({ postId: 1 })
  console.log({ data })

  return (
    <main className="flex flex-col min-h-screen bg-red-200 items-center justify-center">
      Server: {data}
      <Component />
    </main>
  )
}
