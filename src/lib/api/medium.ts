import { MEDIUM_USERNAME } from '@/lib/config'
import type { MediumPost } from '@/lib/types'

const MEDIUM_FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`
const MAX_POSTS = 4
const REQUEST_TIMEOUT_MS = 5000

/** Unwrap <![CDATA[...]]> if present, otherwise trim. */
function stripCDATA(s: string): string {
  const m = s.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/)
  return m ? m[1].trim() : s.trim()
}

/** Return the text content of the first matching element. */
function tagText(xml: string, tag: string): string {
  const m = xml.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'),
  )
  return m ? stripCDATA(m[1]) : ''
}

/** Return text content of every matching element. */
function allTagText(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'gi')
  const out: string[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(xml)) !== null) {
    const t = stripCDATA(m[1])
    if (t) out.push(t)
  }
  return out
}

/**
 * Resolve an item's link.
 * Handles RSS 2.0  : <link>https://…</link>
 * Handles Atom     : <link rel="alternate" href="https://…" />
 */
function resolveLink(xml: string): string {
  const atom = xml.match(/<link[^>]+href=["']([^"']+)["']/)
  if (atom) return atom[1]
  return tagText(xml, 'link')
}

/** Split the feed XML into individual <item> or <entry> blocks. */
function extractBlocks(xml: string, tag: 'item' | 'entry'): string[] {
  const re = new RegExp(`<${tag}[\\s>][\\s\\S]*?<\\/${tag}>`, 'gi')
  const blocks: string[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(xml)) !== null) blocks.push(m[0])
  return blocks
}

/** Map a raw XML block to a MediumPost. */
function parseBlock(block: string): MediumPost {
  return {
    title: tagText(block, 'title'),
    pubDate:
      tagText(block, 'pubDate') ||
      tagText(block, 'published') ||
      tagText(block, 'updated'),
    link: resolveLink(block),
    categories: allTagText(block, 'category'),
  }
}

/** Parse an RSS 2.0 or Atom feed string and return posts. */
function parseRSS(xml: string): MediumPost[] {
  const isAtom = /<feed\b/i.test(xml)
  return extractBlocks(xml, isAtom ? 'entry' : 'item').map(parseBlock)
}

export async function getBlogs(): Promise<MediumPost[]> {
  if (!MEDIUM_USERNAME) {
    return []
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const res = await fetch(MEDIUM_FEED_URL, {
      signal: controller.signal,
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error(`Medium RSS fetch failed: ${res.status}`)
      return []
    }

    return parseRSS(await res.text()).slice(0, MAX_POSTS)
  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      console.error('Medium request timed out')
    } else {
      console.error('Error fetching Medium blogs:', error)
    }
    return []
  } finally {
    clearTimeout(timeout)
  }
}
