import { SOCIAL } from './content'
import catalog from './procedures-catalog.json'

export const AUTHOR = {
  slug: 'dra-evelyne-borges-de-mattos',
  name: catalog.siteName,
  shortName: 'Dra. Evelyne',
  jobTitle: 'Cirurgiã Plástica',
  credentials: catalog.credentials,
  specialty: catalog.specialty,
  city: catalog.city,
  crm: 'CRM-MG 63.834',
  rqe: 'RQE 50.611',
  image: '/assets/images/evelyne.webp',
  logo: '/assets/images/logo.webp',
  headline: 'Especialista em remodelar confiança',
  bio: [
    `Cirurgiã Plástica especialista pela Sociedade Brasileira de Cirurgia Plástica (SBCP) e Associação Médica Brasileira (AMB).`,
    `Atuação em Cirurgia Plástica estética e reparadora, com atendimento online e presencial em ${catalog.city}.`,
  ],
  sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.lattes],
}

export function authorPath() {
  return `/autora/${AUTHOR.slug}/`
}

export function authorAbsoluteUrl() {
  return `${catalog.siteUrl}${authorPath()}`
}

export function authorPersonSchema() {
  return {
    '@type': 'Person',
    '@id': `${authorAbsoluteUrl()}#person`,
    name: AUTHOR.name,
    url: authorAbsoluteUrl(),
    image: `${catalog.siteUrl}${AUTHOR.image}`,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.bio.join(' '),
    worksFor: {
      '@type': 'MedicalOrganization',
      name: AUTHOR.name,
    },
    hasCredential: [AUTHOR.crm, AUTHOR.rqe, AUTHOR.credentials],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Varginha',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    sameAs: AUTHOR.sameAs,
  }
}

export function publisherSchema() {
  return {
    '@type': 'Organization',
    '@id': `${catalog.siteUrl}/#organization`,
    name: AUTHOR.name,
    url: catalog.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${catalog.siteUrl}${AUTHOR.logo}`,
    },
  }
}

/** Data editorial base dos artigos (conteúdo educativo do site). */
export const ARTICLE_DATE_PUBLISHED = '2026-03-01'
