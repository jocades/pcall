'use client'

import { ChevronDownIcon, ChevronUpIcon, RouteIcon } from 'lucide-react'

import { useState } from 'react'
import { cn } from '~/_utils'

export function RouterItem() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((prev) => !prev)

  return (
    <section>
      <div
        onClick={() => toggle()}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:cursor-pointer',
          open && 'bg-muted text-primary',
        )}
      >
        <RouteIcon className="h-4 w-4" />
        Users
        {/* <Badge
          variant="secondary"
          className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        >
          6
        </Badge> */}
        <div className="flex-grow" />
        {open ? (
          <ChevronUpIcon className="h-4 w-4" />
        ) : (
          <ChevronDownIcon className="h-4 w-4" />
        )}
      </div>
      {open && (
        <div className="flex flex-col transition-all pl-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:cursor-pointer">
            route 1
          </div>
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:cursor-pointer">
            route 2
          </div>
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:cursor-pointer">
            route 3
          </div>
        </div>
      )}
    </section>
  )
}
