import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-plugin-prettier/recommended'
import checkFile from 'eslint-plugin-check-file'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.next/', 'node_modules/'],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/app/**/': 'NEXT_JS_APP_ROUTER_CASE',
          'src/**/': 'KEBAB_CASE',
        },
      ],
    },
  },
  prettier,
]

export default config
