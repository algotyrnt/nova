import { GITHUB_USERNAME, SITE_NAME } from '@/lib/config'

// ─── Types ────────────────────────────────────────────────────────────────────

type Repo = {
  author: string
  name: string
  description: string
  language: string
  url: string
}

type PinnedItemNode = {
  name: string
  description: string | null
  primaryLanguage?: { name: string } | null
  owner?: { login: string } | null
  url: string
}

type GitHubGraphQLResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: PinnedItemNode[]
      }
    }
  }
  errors?: Array<{ message: string }>
}

// ─── Constants ────────────────────────────────────────────────────────────────

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql'
const MAX_REPOS = 6
const REQUEST_TIMEOUT_MS = 5000

const PINNED_REPOS_QUERY = `
  query($login: String!) {
    user(login: $login) {
      pinnedItems(first: ${MAX_REPOS}, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            primaryLanguage { name }
            owner { login }
            url
          }
        }
      }
    }
  }
`

// ─── API ──────────────────────────────────────────────────────────────────────

export async function getPinnedProjects(): Promise<Repo[]> {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    console.warn('GITHUB_TOKEN not set. Skipping pinned repo fetch.')
    return []
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const res = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'User-Agent': SITE_NAME,
      },
      body: JSON.stringify({
        query: PINNED_REPOS_QUERY,
        variables: { login: GITHUB_USERNAME },
      }),
      signal: controller.signal,
      next: { revalidate: 3600 },
    })

    clearTimeout(timeout)

    if (!res.ok) {
      console.error(`GitHub GraphQL failed: ${res.status}`)
      return []
    }

    const json: GitHubGraphQLResponse = await res.json()

    if (json.errors?.length) {
      console.error(
        'GitHub GraphQL errors:',
        json.errors.map((e) => e.message),
      )
      return []
    }

    const nodes = json.data?.user?.pinnedItems?.nodes ?? []

    return nodes.slice(0, MAX_REPOS).map((node) => ({
      author: node.owner?.login ?? GITHUB_USERNAME,
      name: node.name,
      description: node.description ?? '',
      language: node.primaryLanguage?.name ?? '',
      url: node.url,
    }))
  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      console.error('GitHub request timed out')
    } else {
      console.error('Error fetching pinned repos:', error)
    }
    return []
  }
}
