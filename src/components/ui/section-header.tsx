type SectionHeaderProps = {
  title: string
  /** External URL shown as a "See more →" link. Omit to render only the title. */
  href?: string
  hrefLabel?: string
}

/**
 * Reusable section heading row.
 * Renders the section title on the left and an optional external "See more" link on the right.
 */
export function SectionHeader({
  title,
  href,
  hrefLabel = 'See more →',
}: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-lg font-medium">{title}</h2>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {hrefLabel}
        </a>
      )}
    </div>
  )
}
