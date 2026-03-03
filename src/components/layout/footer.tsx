'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { SPRING_TRANSITION } from '@/lib/constants'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type ThemeOption = {
  label: string
  id: string
  icon: React.ReactNode
}

// ─── Constants ────────────────────────────────────────────────────────────────

const THEME_OPTIONS: ThemeOption[] = [
  { label: 'Light', id: 'light', icon: <SunIcon className="h-4 w-4" /> },
  { label: 'Dark', id: 'dark', icon: <MoonIcon className="h-4 w-4" /> },
  { label: 'System', id: 'system', icon: <MonitorIcon className="h-4 w-4" /> },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={SPRING_TRANSITION}
      enableHover={false}
      onValueChange={(id) => setTheme(id as string)}
    >
      {THEME_OPTIONS.map((option) => (
        <button
          key={option.id}
          className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          type="button"
          aria-label={`Switch to ${option.label} theme`}
          data-id={option.id}
        >
          {option.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="/">
          <TextLoop className="text-xs text-zinc-500">
            <span>&copy; {new Date().getFullYear()} algotyrnt</span>
            <span>Personal website.</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
