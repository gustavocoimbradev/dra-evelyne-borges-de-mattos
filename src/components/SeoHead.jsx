import { useEffect } from 'react'

export default function SeoHead({
  title,
  description,
  canonical,
  jsonLd,
  type = 'website',
  author,
  image,
  publishedTime,
  modifiedTime,
}) {
  useEffect(() => {
    document.title = title

    const ensureMeta = (selector, attrs) => {
      let node = document.head.querySelector(selector)
      if (!node) {
        node = document.createElement('meta')
        Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value))
        document.head.appendChild(node)
      }
      return node
    }

    const desc = ensureMeta('meta[name="description"]', { name: 'description' })
    desc.setAttribute('content', description)

    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' })
    ogTitle.setAttribute('content', title)

    const ogDesc = ensureMeta('meta[property="og:description"]', { property: 'og:description' })
    ogDesc.setAttribute('content', description)

    const ogUrl = ensureMeta('meta[property="og:url"]', { property: 'og:url' })
    ogUrl.setAttribute('content', canonical)

    const ogType = ensureMeta('meta[property="og:type"]', { property: 'og:type' })
    ogType.setAttribute('content', type)

    if (image) {
      const ogImage = ensureMeta('meta[property="og:image"]', { property: 'og:image' })
      ogImage.setAttribute('content', image)
    }

    if (author) {
      const authorMeta = ensureMeta('meta[name="author"]', { name: 'author' })
      authorMeta.setAttribute('content', author)

      const articleAuthor = ensureMeta('meta[property="article:author"]', {
        property: 'article:author',
      })
      articleAuthor.setAttribute('content', author)
    }

    if (publishedTime) {
      const published = ensureMeta('meta[property="article:published_time"]', {
        property: 'article:published_time',
      })
      published.setAttribute('content', publishedTime)
    }

    if (modifiedTime) {
      const modified = ensureMeta('meta[property="article:modified_time"]', {
        property: 'article:modified_time',
      })
      modified.setAttribute('content', modifiedTime)
    }

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)

    const scriptId = 'seo-jsonld'
    let script = document.getElementById(scriptId)
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }

    return () => {
      const leftover = document.getElementById(scriptId)
      if (leftover) leftover.remove()
    }
  }, [
    title,
    description,
    canonical,
    type,
    author,
    image,
    publishedTime,
    modifiedTime,
    JSON.stringify(jsonLd),
  ])

  return null
}
