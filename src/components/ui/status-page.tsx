import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

type LinkAction = {
  type: 'link'
  label: string
  href: string
}

type ButtonAction = {
  type: 'button'
  label: string
  onClick: () => void
}

type StatusPageProps = {
  title: string
  message: string
  action?: LinkAction | ButtonAction
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const actionButtonClassName =
  'rounded-md bg-zinc-900 px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200'

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Generic full-page status display used by error and not-found pages.
 */
export function StatusPage({ title, message, action }: StatusPageProps) {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400">{message}</p>

      {action?.type === 'link' && (
        <Link href={action.href} className={actionButtonClassName}>
          {action.label}
        </Link>
      )}

      {action?.type === 'button' && (
        <button className={actionButtonClassName} onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  )
}
