import { MEDIUM_USERNAME } from '@/lib/config'
import { XMLParser } from 'fast-xml-parser'

// ─── Types ────────────────────────────────────────────────────────────────────

type MediumPost = {
  title: string
  pubDate: string
  link: string
  categories: string[]
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MEDIUM_FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`
const MAX_POSTS = 4

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
  removeNSPrefix: true,
  cdataPropName: '__cdata',
})

// ─── Helpers (internal) ───────────────────────────────────────────────────────

type XmlField =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | null
  | undefined

/** Extracts a plain string from any XML field shape produced by fast-xml-parser. */
function extractText(field: XmlField): string {
  if (field == null) return ''
  if (typeof field !== 'object') return String(field)

  const obj = field as Record<string, unknown>
  return (
    (obj.__cdata as string) ||
    (obj['#text'] as string) ||
    (obj.text as string) ||
    (obj.term as string) ||
    (obj.label as string) ||
    (obj._ as string) ||
    (obj.value as string) ||
    (Object.values(obj).find((v) => typeof v === 'string') as string) ||
    ''
  )
}

function normalizeLink(link: XmlField): string {
  if (!link) return ''
  if (typeof link === 'string') return link
  if (typeof link === 'object') {
    const href = (link as Record<string, unknown>)?.href
    if (typeof href === 'string') return href
  }
  return ''
}

type RawItem = Record<string, unknown>

function parseItem(item: RawItem): MediumPost {
  const categories = Array.isArray(item.category)
    ? (item.category as unknown[])
        .map((c) => extractText(c as XmlField))
        .filter(Boolean)
    : item.category
      ? [extractText(item.category as XmlField)]
      : []

  return {
    title: extractText(item.title as XmlField),
    pubDate: (item.pubDate as string) ?? (item.published as string) ?? '',
    link: normalizeLink(item.link as XmlField),
    categories,
  }
}

// ─── API ──────────────────────────────────────────────────────────────────────

export async function getBlogs(): Promise<MediumPost[]> {
  try {
    const res = await fetch(MEDIUM_FEED_URL, { next: { revalidate: 3600 } })

    if (!res.ok) {
      console.error(`Medium RSS fetch failed: ${res.status}`)
      return []
    }

    const parsed = parser.parse(await res.text())
    const rawItems: unknown =
      parsed?.rss?.channel?.item ?? parsed?.feed?.entry ?? []

    const items: RawItem[] = Array.isArray(rawItems)
      ? rawItems
      : rawItems
        ? [rawItems as RawItem]
        : []

    return items.slice(0, MAX_POSTS).map(parseItem)
  } catch (error) {
    console.error('Error fetching Medium blogs:', error)
    return []
  }
}
