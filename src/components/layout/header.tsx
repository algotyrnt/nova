'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="font-medium text-black dark:text-white">
          <Link href="/">algotyrnt</Link>
        </h1>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Punjitha Bandara
        </TextEffect>
      </div>
    </header>
  )
}
