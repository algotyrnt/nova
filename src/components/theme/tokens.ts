/**
 * Shared design tokens used both inside the MUI theme and exported for use in
 * sx props / globals where direct theme access isn't available (e.g. in CSS
 * strings that must be resolved at build time).
 *
 * Keep all raw color/shadow values here so a single edit propagates everywhere.
 */
export const tokens = {
  shadow: {
    card: '0 2px 12px rgba(0,0,0,0.06)',
    cardHover: '0 6px 24px rgba(0,0,0,0.07)',
    socialHover: '0 2px 8px rgba(0,0,0,0.06)',
  },
  border: {
    subtle: 'rgba(0,0,0,0.08)',
    medium: 'rgba(0,0,0,0.14)',
  },
  backdrop: {
    header: 'rgba(248, 248, 248, 0.85)',
  },
} as const
