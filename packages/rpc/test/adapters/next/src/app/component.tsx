'use client'

import { useEffect, useState } from 'react'
import { getPost } from './actions'
import { Use } from '../../../../../dist/src/types'

interface ComponentProps {}

export function Component(props: ComponentProps) {
  const [state, setState] = useState<Use<typeof getPost>>()

  useEffect(() => {
    const get = async () => {
      const data = await getPost({ postId: 2 })
      setState(data)
    }

    get()
  }, [])

  return <div>Client: {state}</div>
}
