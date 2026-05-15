/**
 * Shared design tokens used both inside the MUI theme and exported for use in
 * sx props / globals where direct theme access isn't available (e.g. in CSS
 * strings that must be resolved at build time).
 *
 * Note: Most values are now defined as CSS variables in globals.css. This file
 * acts as a bridge, mapping those CSS variables to JS tokens for use in components
 * and theme definitions.
 */
export const tokens = {
  palette: {
    primaryMainHex: '#6366f1',
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
