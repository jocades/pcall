'use client'

import { useEffect, useState } from 'react'
import { createPost, getPost, getPosts } from './actions'
import type { Use } from '@/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function Component() {
  const [state, setState] = useState<Use<typeof getPost>>()

  useEffect(() => {
    const get = async () => {
      const data = await getPost({ postId: '2' })
      setState(data)
    }

    get()
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export function Posts() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  if (isLoading) return <p>Loading...</p>

  if (error || !posts) return <p>{error?.message}</p>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export function PostForm() {
  const [title, setTitle] = useState('')

  const queryClient = useQueryClient()

  const { mutate, error, isPending } = useMutation({
    mutationKey: ['create-post'],
    mutationFn: createPost,
    onSuccess: () => {
      setTitle('')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!title?.trim()) return
        mutate({ title })
      }}
    >
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {error && <div>{error.message}</div>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )
}
