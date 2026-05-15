/**
 * Shared design tokens used both inside the MUI theme and exported for use in
 * sx props / globals where direct theme access isn't available (e.g. in CSS
 * strings that must be resolved at build time).
 *
 * Keep all raw color/shadow values here so a single edit propagates everywhere.
 */
export const tokens = {
  palette: {
    primaryMain: 'var(--palette-primary)',
  },
  shadow: {
    card: 'var(--shadow-card)',
    cardHover: 'var(--shadow-card-hover)',
    socialHover: 'var(--shadow-social-hover)',
  },
  border: {
    subtle: 'var(--border-subtle)',
    medium: 'var(--border-medium)',
  },
  backdrop: {
    header: 'var(--backdrop-header)',
  },
} as const
