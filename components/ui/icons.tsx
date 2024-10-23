'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="black"></circle>

      <path
        d="M 128 48
           A 80 80 0 1 0 192 144"
        stroke="white"
        strokeWidth="12"
        fill="none"
      />

      <polygon points="200,144 170,122 190,170" fill="white" />
    </svg>
  )
}

export { IconLogo }
