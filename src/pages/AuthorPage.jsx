import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import SeoHead from '../components/SeoHead'
import InternalBanner from '../components/InternalBanner'
import BreadcrumbBar from '../components/BreadcrumbBar'
import FormationDialog from '../components/FormationDialog'
import { WHATSAPP } from '../data/content'
import {
  AUTHOR,
  authorAbsoluteUrl,
  authorPath,
  authorPersonSchema,
  publisherSchema,
} from '../data/author'
import { SITE_NAME, SITE_URL, getCategories, procedurePath } from '../data/procedures'

export default function AuthorPage() {
  const { authorSlug } = useParams()

  if (authorSlug !== AUTHOR.slug) {
    return <Navigate to={authorPath()} replace />
  }

  const categories = getCategories()
  const seo = {
    title: `${AUTHOR.name} | Cirurgiã Plástica | Autora`,
    description: `${AUTHOR.name}, ${AUTHOR.jobTitle} especialista pela ${AUTHOR.credentials}. ${AUTHOR.crm} · ${AUTHOR.rqe}. Atendimento em ${AUTHOR.city}.`,
    canonical: authorAbsoluteUrl(),
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${seo.canonical}#webpage`,
        url: seo.canonical,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${seo.canonical}#person` },
        about: { '@id': `${seo.canonical}#person` },
      },
      authorPersonSchema(),
      publisherSchema(),
      {
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
            name: AUTHOR.name,
            item: seo.canonical,
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-svh bg-porcelain text-espresso">
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        type="profile"
        author={AUTHOR.name}
        image={`${SITE_URL}${AUTHOR.image}`}
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-[4.5rem] pb-16 md:pt-20">
        <InternalBanner
          image={AUTHOR.image}
          eyebrow="Autora"
          title={AUTHOR.name}
          description={`${AUTHOR.jobTitle} · ${AUTHOR.credentials} · ${AUTHOR.city}`}
        />
        <BreadcrumbBar>
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="transition hover:text-espresso">
                Início
              </Link>
            </li>
            <li aria-hidden="true" className="text-espresso/40">
              /
            </li>
            <li className="text-espresso">{AUTHOR.shortName}</li>
          </ol>
        </BreadcrumbBar>

        <div className="container-site mt-12 md:mt-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="overflow-hidden ring-1 ring-clay/20">
                <img
                  src={AUTHOR.image}
                  alt={AUTHOR.name}
                  className="aspect-[4/5] w-full object-cover"
                  width={480}
                  height={600}
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-y-2 border-clay/20 py-6">
                <div>
                  <dt className="text-xs tracking-[0.15em] uppercase text-stone">CRM-MG</dt>
                  <dd className="mt-1 font-display text-2xl text-clay">63.834</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.15em] uppercase text-stone">RQE</dt>
                  <dd className="mt-1 font-display text-2xl text-clay">50.611</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-3">
                <Button href={WHATSAPP.online} variant="filled" icon="globe">
                  Consulta online
                </Button>
                <FormationDialog />
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Quem é</p>
              <h2 className="mt-2 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                {AUTHOR.headline}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone md:text-lg">
                {AUTHOR.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <section className="mt-14" aria-labelledby="artigos">
                <h2 id="artigos" className="font-display text-2xl text-espresso md:text-3xl">
                  Artigos e procedimentos
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone">
                  Conteúdos educativos assinados pela {SITE_NAME} sobre procedimentos de{' '}
                  {AUTHOR.specialty.toLowerCase()}.
                </p>
                <div className="mt-8 space-y-8">
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <h3 className="font-display text-xl text-espresso">
                        <Link
                          to={`/procedimentos/${category.slug}/`}
                          className="transition hover:text-clay"
                        >
                          {category.title}
                        </Link>
                      </h3>
                      <ul className="mt-3 divide-y divide-clay/15 border border-clay/15 bg-white">
                        {category.procedures.map((procedure) => (
                          <li key={procedure.slug}>
                            <Link
                              to={procedurePath(category.slug, procedure.slug)}
                              className="flex items-center justify-between gap-4 px-4 py-3 text-espresso transition hover:bg-rose/30 hover:text-clay"
                            >
                              <span>{procedure.title}</span>
                              <ArrowRight className="size-5 shrink-0 text-clay" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
