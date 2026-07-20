import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'dist')
const catalog = JSON.parse(
  readFileSync(join(root, 'src/data/procedures-catalog.json'), 'utf8'),
)

const indexHtml = readFileSync(join(dist, 'index.html'), 'utf8')

const WHATSAPP_ONLINE =
  'https://api.whatsapp.com/send?phone=5535984463393&text=Ol%C3%A1.%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20online!'
const WHATSAPP_PRESENCIAL =
  'https://api.whatsapp.com/send?phone=5535984463393&text=Ol%C3%A1.%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20presencial!'

const AUTHOR = {
  slug: 'dra-evelyne-borges-de-mattos',
  name: catalog.siteName,
  jobTitle: 'Cirurgiã Plástica',
  credentials: catalog.credentials,
  image: `${catalog.siteUrl}/assets/images/evelyne.webp`,
  logo: `${catalog.siteUrl}/assets/images/logo.webp`,
  path: `/autora/dra-evelyne-borges-de-mattos/`,
  crm: 'CRM-MG 63.834',
  rqe: 'RQE 50.611',
  sameAs: [
    'https://www.instagram.com/draevelyneborgesdemattos/',
    'https://www.facebook.com/draevelyne.plastica',
    'http://lattes.cnpq.br/6116710948494978',
  ],
}

const ARTICLE_DATE = '2026-03-01'
const authorUrl = `${catalog.siteUrl}${AUTHOR.path}`

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function authorPersonLd() {
  return {
    '@type': 'Person',
    '@id': `${authorUrl}#person`,
    name: AUTHOR.name,
    url: authorUrl,
    image: AUTHOR.image,
    jobTitle: AUTHOR.jobTitle,
    sameAs: AUTHOR.sameAs,
  }
}

function publisherLd() {
  return {
    '@type': 'Organization',
    '@id': `${catalog.siteUrl}/#organization`,
    name: AUTHOR.name,
    url: catalog.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: AUTHOR.logo,
    },
  }
}

function writePage({
  pathSegments,
  title,
  description,
  canonical,
  bodyHtml,
  jsonLd,
  type = 'website',
  author,
  image,
  publishedTime,
  modifiedTime,
}) {
  const dir = join(dist, ...pathSegments)
  mkdirSync(dir, { recursive: true })

  let html = indexHtml
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  )
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
  )

  const metaExtras = [
    `<meta property="og:type" content="${escapeHtml(type)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
  ]
  if (image) metaExtras.push(`<meta property="og:image" content="${escapeHtml(image)}" />`)
  if (author) {
    metaExtras.push(`<meta name="author" content="${escapeHtml(author)}" />`)
    metaExtras.push(`<meta property="article:author" content="${escapeHtml(author)}" />`)
  }
  if (publishedTime) {
    metaExtras.push(
      `<meta property="article:published_time" content="${escapeHtml(publishedTime)}" />`,
    )
  }
  if (modifiedTime) {
    metaExtras.push(
      `<meta property="article:modified_time" content="${escapeHtml(modifiedTime)}" />`,
    )
  }

  const seoBlock = `
    ${metaExtras.join('\n    ')}
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <noscript>
      ${bodyHtml}
    </noscript>
  `
  html = html.replace('<div id="root"></div>', `${seoBlock}\n    <div id="root"></div>`)

  writeFileSync(join(dir, 'index.html'), html)
}

const urls = [`${catalog.siteUrl}/`]

const authorTitle = `${AUTHOR.name} | Cirurgiã Plástica | Autora`
const authorDescription = `${AUTHOR.name}, ${AUTHOR.jobTitle} especialista pela ${AUTHOR.credentials}. ${AUTHOR.crm} · ${AUTHOR.rqe}. Atendimento em ${catalog.city}.`

const procedureIndex = catalog.categories
  .map((category) => {
    const links = category.procedures
      .map(
        (procedure) =>
          `<li><a href="/procedimentos/${category.slug}/${procedure.slug}/">${escapeHtml(procedure.title)}</a></li>`,
      )
      .join('')
    return `<h2>${escapeHtml(category.title)}</h2><ul>${links}</ul>`
  })
  .join('')

writePage({
  pathSegments: ['autora', AUTHOR.slug],
  title: authorTitle,
  description: authorDescription,
  canonical: authorUrl,
  type: 'profile',
  author: AUTHOR.name,
  image: AUTHOR.image,
  bodyHtml: `
    <h1>${escapeHtml(AUTHOR.name)}</h1>
    <p>${escapeHtml(authorDescription)}</p>
    <p><a rel="author" href="${AUTHOR.path}">Perfil da autora</a></p>
    ${procedureIndex}
  `,
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${authorUrl}#webpage`,
        url: authorUrl,
        name: authorTitle,
        description: authorDescription,
        mainEntity: { '@id': `${authorUrl}#person` },
      },
      authorPersonLd(),
      publisherLd(),
    ],
  },
})
urls.push(authorUrl)

const couplePath = '/casal-da-plastica/'
const coupleCanonical = `${catalog.siteUrl}${couplePath}`
const coupleTitle = `Casal da Plástica | ${catalog.siteName} e Dr. Ítalo Venturelli`
const coupleDescription = `Redefina seu contorno corporal com a ${catalog.siteName} e o Dr. Ítalo Venturelli, cirurgiões plásticos com atendimento em ${catalog.city}.`
const coupleImage = `${catalog.siteUrl}/assets/images/casal/hero-casal.png`

writePage({
  pathSegments: ['casal-da-plastica'],
  title: coupleTitle,
  description: coupleDescription,
  canonical: coupleCanonical,
  author: AUTHOR.name,
  image: coupleImage,
  bodyHtml: `
    <h1>O Casal da Plástica</h1>
    <p>${escapeHtml(coupleDescription)}</p>
    <p>Com a <a rel="author" href="${AUTHOR.path}">${escapeHtml(AUTHOR.name)}</a> e o Dr. Ítalo Venturelli.</p>
    <p><a href="${WHATSAPP_PRESENCIAL}">Agendar consulta</a></p>
  `,
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: coupleTitle,
        description: coupleDescription,
        url: coupleCanonical,
        author: { '@id': `${authorUrl}#person` },
        publisher: { '@id': `${catalog.siteUrl}/#organization` },
      },
      authorPersonLd(),
      publisherLd(),
    ],
  },
})
urls.push(coupleCanonical)

for (const category of catalog.categories) {
  const catPath = `/procedimentos/${category.slug}/`
  const catCanonical = `${catalog.siteUrl}${catPath}`
  const catTitle = `${category.title} | ${catalog.siteName}`
  let catDescription = category.whatIs
    ? `${category.whatIs.slice(0, 140).replace(/\s+\S*$/, '')} ${catalog.siteName}, ${catalog.city}.`
    : `${category.title} com a ${catalog.siteName}, Cirurgiã Plástica especialista pela ${catalog.credentials}. Atendimento em ${catalog.city}.`
  if (catDescription.length > 170) catDescription = `${catDescription.slice(0, 167)}…`
  const catImage = `${catalog.siteUrl}${category.image}`

  const procedureLinks = category.procedures
    .map(
      (procedure) =>
        `<li><a href="/procedimentos/${category.slug}/${procedure.slug}/">${escapeHtml(procedure.title)}</a></li>`,
    )
    .join('')

  writePage({
    pathSegments: ['procedimentos', category.slug],
    title: catTitle,
    description: catDescription,
    canonical: catCanonical,
    author: AUTHOR.name,
    image: catImage,
    bodyHtml: `
      <h1>${escapeHtml(category.title)}</h1>
      <p>Por <a rel="author" href="${AUTHOR.path}">${escapeHtml(AUTHOR.name)}</a></p>
      <h2>O que é</h2>
      <p>${escapeHtml(category.whatIs || '')}</p>
      <h2>Como funciona</h2>
      <p>${escapeHtml(category.howItWorks || '')}</p>
      <h2>Procedimentos</h2>
      <ul>${procedureLinks}</ul>
    `,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: category.title,
          description: catDescription,
          url: catCanonical,
          author: { '@id': `${authorUrl}#person` },
          publisher: { '@id': `${catalog.siteUrl}/#organization` },
        },
        authorPersonLd(),
        publisherLd(),
      ],
    },
  })
  urls.push(catCanonical)

  for (const procedure of category.procedures) {
    const procPath = `/procedimentos/${category.slug}/${procedure.slug}/`
    const procCanonical = `${catalog.siteUrl}${procPath}`
    const procTitle = `${procedure.title}: o que é, como funciona e indicação | ${catalog.siteName}`
    const procDescription = `${procedure.whatIs.slice(0, 120).trim()}… Avaliação com a ${catalog.siteName} em ${catalog.city}.`
    const procImage = `${catalog.siteUrl}${category.image}`

    const indicatedList = procedure.indicatedFor
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join('')

    writePage({
      pathSegments: ['procedimentos', category.slug, procedure.slug],
      title: procTitle,
      description: procDescription.slice(0, 170),
      canonical: procCanonical,
      type: 'article',
      author: AUTHOR.name,
      image: procImage,
      publishedTime: ARTICLE_DATE,
      modifiedTime: ARTICLE_DATE,
      bodyHtml: `
        <article>
          <h1>${escapeHtml(procedure.title)}</h1>
          <p>Por <a rel="author" href="${AUTHOR.path}">${escapeHtml(AUTHOR.name)}</a>, ${escapeHtml(AUTHOR.jobTitle)}</p>
          <h2>O que é</h2>
          <p>${escapeHtml(procedure.whatIs)}</p>
          <h2>Como funciona</h2>
          <p>${escapeHtml(procedure.howItWorks)}</p>
          <h2>Para quem é indicado</h2>
          <ul>${indicatedList}</ul>
          <h2>${escapeHtml(procedure.title)} com a ${escapeHtml(catalog.siteName)}</h2>
          <p>A ${escapeHtml(catalog.siteName)}, Cirurgiã Plástica especialista pela ${escapeHtml(catalog.credentials)}, realiza este procedimento na categoria ${escapeHtml(category.title)}. Agende consulta online ou presencial em ${escapeHtml(catalog.city)}.</p>
          <p><a href="${WHATSAPP_ONLINE}">Consulta online</a> · <a href="${WHATSAPP_PRESENCIAL}">Consulta presencial</a></p>
        </article>
      `,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            '@id': `${procCanonical}#article`,
            headline: procedure.title,
            description: procDescription,
            image: [procImage],
            datePublished: ARTICLE_DATE,
            dateModified: ARTICLE_DATE,
            inLanguage: 'pt-BR',
            author: { '@id': `${authorUrl}#person` },
            publisher: { '@id': `${catalog.siteUrl}/#organization` },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': procCanonical,
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
            url: procCanonical,
            name: procTitle,
            description: procDescription,
            author: { '@id': `${authorUrl}#person` },
          },
          authorPersonLd(),
          publisherLd(),
        ],
      },
    })
    urls.push(procCanonical)
  }
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(dist, 'sitemap.xml'), sitemap)

const robots = `User-agent: *
Allow: /

Sitemap: ${catalog.siteUrl}/sitemap.xml
`
writeFileSync(join(dist, 'robots.txt'), robots)

console.log(`SEO pages geradas: ${urls.length - 1} internas + sitemap.xml`)
