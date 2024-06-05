import { getPost } from './actions'
import { Client } from './client'
import { Component, PostForm, Posts } from './component'

const params = { id: (Math.floor(Math.random() * 20) + 1).toString() }

export default async function Home() {
  const data = await getPost({ postId: params.id })

  return (
    <main>
      <div>
        SERVER
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <Component />
      <Posts />
      <PostForm />
      <Client />
    </main>
  )
}
