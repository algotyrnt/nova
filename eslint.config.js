import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.next/', 'node_modules/'],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettier,
]

export default config
