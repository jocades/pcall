'use client'

import { useEffect, useState } from 'react'
import { getUser } from './actions'
import { Use } from '../../../../packages/rpc/src/types'

interface ComponentProps {}

export function Component(props: ComponentProps) {
  const [state, setState] = useState<Use<typeof getUser>>()

  useEffect(() => {
    const get = async () => {
      const data = await getUser({ userId: 2 })
      setState(data)
    }

    get()
  }, [])

  return <div>Client: {state}</div>
}
