import catalog from './procedures-catalog.json'
import {
  ARTICLE_DATE_PUBLISHED,
  AUTHOR,
  authorAbsoluteUrl,
  authorPersonSchema,
  publisherSchema,
} from './author'

export const SITE_URL = catalog.siteUrl
export const SITE_NAME = catalog.siteName

export function getCategories() {
  return catalog.categories
}

export function getCategory(slug) {
  return catalog.categories.find((category) => category.slug === slug) || null
}

export function getProcedure(categorySlug, procedureSlug) {
  const category = getCategory(categorySlug)
  if (!category) return null
  const procedure = category.procedures.find((item) => item.slug === procedureSlug)
  if (!procedure) return null
  return { category, procedure }
}

export function getAllProcedurePaths() {
  return catalog.categories.flatMap((category) =>
    category.procedures.map((procedure) => ({
      categorySlug: category.slug,
      procedureSlug: procedure.slug,
      categoryTitle: category.title,
      procedureTitle: procedure.title,
    })),
  )
}

export function categoryPath(slug) {
  return `/procedimentos/${slug}/`
}

export function procedurePath(categorySlug, procedureSlug) {
  return `/procedimentos/${categorySlug}/${procedureSlug}/`
}

export function categorySeo(category) {
  const title = `${category.title} | ${SITE_NAME}`
  let description = category.whatIs
    ? `${category.whatIs.slice(0, 140).replace(/\s+\S*$/, '')} ${SITE_NAME}, ${catalog.city}.`
    : `${category.title} com a ${SITE_NAME}, Cirurgiã Plástica especialista pela ${catalog.credentials}. Atendimento em ${catalog.city}.`
  if (description.length > 170) description = `${description.slice(0, 167)}…`
  const path = categoryPath(category.slug)
  return {
    title,
    description,
    canonical: `${SITE_URL}${path}`,
    path,
  }
}

export function procedureSeo(category, procedure) {
  const title = `${procedure.title}: o que é, como funciona e indicação | ${SITE_NAME}`
  let description = procedure.whatIs
    ? `${procedure.whatIs.slice(0, 140).replace(/\s+\S*$/, '')} Avaliação com a ${SITE_NAME} em ${catalog.city}.`
    : `${procedure.title}: ${category.title}. ${SITE_NAME}, Cirurgiã Plástica (${catalog.credentials}). ${catalog.city}.`
  if (description.length > 170) description = `${description.slice(0, 167)}…`
  const path = procedurePath(category.slug, procedure.slug)
  return {
    title,
    description,
    canonical: `${SITE_URL}${path}`,
    path,
    image: `${SITE_URL}${category.image}`,
    datePublished: ARTICLE_DATE_PUBLISHED,
    dateModified: ARTICLE_DATE_PUBLISHED,
  }
}

export function procedureArticleSchema(category, procedure) {
  const seo = procedureSeo(category, procedure)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${seo.canonical}#article`,
        headline: procedure.title,
        name: procedure.title,
        description: seo.description,
        image: [seo.image],
        datePublished: seo.datePublished,
        dateModified: seo.dateModified,
        inLanguage: 'pt-BR',
        isAccessibleForFree: true,
        author: { '@id': `${authorAbsoluteUrl()}#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': seo.canonical,
        },
        about: {
          '@type': 'MedicalProcedure',
          name: procedure.title,
          description: procedure.whatIs,
        },
        articleSection: category.title,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${seo.canonical}#webpage`,
        url: seo.canonical,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: seo.image,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: category.title,
              item: `${SITE_URL}${categoryPath(category.slug)}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: procedure.title,
              item: seo.canonical,
            },
          ],
        },
        author: { '@id': `${authorAbsoluteUrl()}#person` },
        about: {
          '@type': 'MedicalProcedure',
          name: procedure.title,
        },
      },
      authorPersonSchema(),
      publisherSchema(),
    ],
  }
}

export function categoryPageSchema(category) {
  const seo = categorySeo(category)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${seo.canonical}#webpage`,
        url: seo.canonical,
        name: category.title,
        description: seo.description,
        author: { '@id': `${authorAbsoluteUrl()}#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        about: {
          '@type': 'MedicalSpecialty',
          name: catalog.specialty,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: category.title,
              item: seo.canonical,
            },
          ],
        },
      },
      authorPersonSchema(),
      publisherSchema(),
    ],
  }
}

/** Mantém a home alinhada ao catálogo (fonte única). */
export function proceduresForHome() {
  return catalog.categories.map((category) => ({
    title: category.title,
    image: category.image,
    slug: category.slug,
    items: category.procedures.map((procedure) => ({
      title: procedure.title,
      slug: procedure.slug,
      href: procedurePath(category.slug, procedure.slug),
    })),
  }))
}

export { AUTHOR }

export default catalog
