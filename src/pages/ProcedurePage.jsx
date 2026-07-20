import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import SeoHead from '../components/SeoHead'
import InternalBanner from '../components/InternalBanner'
import BreadcrumbBar from '../components/BreadcrumbBar'
import { WHATSAPP } from '../data/content'
import { AUTHOR } from '../data/author'
import {
  SITE_NAME,
  categoryPath,
  getProcedure,
  procedureArticleSchema,
  procedurePath,
  procedureSeo,
} from '../data/procedures'
import catalog from '../data/procedures-catalog.json'

export default function ProcedurePage() {
  const { categorySlug, procedureSlug } = useParams()
  const match = getProcedure(categorySlug, procedureSlug)

  if (!match) {
    return (
      <div className="min-h-svh bg-porcelain text-espresso">
        <Header />
        <main className="container-site py-32 text-center">
          <h1 className="font-display text-3xl">Página não encontrada</h1>
          <Link to="/" className="mt-6 inline-block text-clay underline">
            Voltar ao início
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const { category, procedure } = match
  const seo = procedureSeo(category, procedure)
  const jsonLd = procedureArticleSchema(category, procedure)

  return (
    <div className="min-h-svh bg-porcelain text-espresso">
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        type="article"
        author={AUTHOR.name}
        image={seo.image}
        publishedTime={seo.datePublished}
        modifiedTime={seo.dateModified}
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-[4.5rem] pb-16 md:pt-20">
        <InternalBanner eyebrow={category.title} title={procedure.title} />
        <BreadcrumbBar>
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="transition hover:text-white">
                Início
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/50">
              /
            </li>
            <li>
              <Link to={categoryPath(category.slug)} className="transition hover:text-white">
                {category.title}
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/50">
              /
            </li>
            <li className="text-white">{procedure.title}</li>
          </ol>
        </BreadcrumbBar>

        <article className="container-site mt-12 md:mt-14">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-10 lg:col-span-7">
              <section aria-labelledby="o-que-e">
                <h2 id="o-que-e" className="font-display text-2xl text-espresso md:text-3xl">
                  O que é
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">{procedure.whatIs}</p>
              </section>

              <section aria-labelledby="como-funciona">
                <h2 id="como-funciona" className="font-display text-2xl text-espresso md:text-3xl">
                  Como funciona
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
                  {procedure.howItWorks}
                </p>
              </section>

              <section aria-labelledby="para-quem">
                <h2 id="para-quem" className="font-display text-2xl text-espresso md:text-3xl">
                  Para quem é indicado
                </h2>
                <ul className="mt-4 space-y-3">
                  {procedure.indicatedFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed text-stone md:text-lg"
                    >
                      <span className="mt-2 size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:col-span-5">
              <figure className="lg:sticky lg:top-28">
                <div className="overflow-hidden ring-1 ring-clay/20">
                  <img
                    src={category.image}
                    alt=""
                    className="aspect-[4/5] w-full object-cover"
                    width={640}
                    height={800}
                  />
                </div>
              </figure>
            </aside>
          </div>

          <section
            className="mt-12 border border-clay/20 border-l-4 border-l-clay bg-white p-6 md:p-8"
            aria-labelledby="com-a-dra"
          >
            <div className="grid gap-6 md:grid-cols-[140px_1fr] md:items-start md:gap-8">
              <img
                src={AUTHOR.image}
                alt={AUTHOR.name}
                width={140}
                height={175}
                className="aspect-[4/5] w-28 object-cover ring-1 ring-clay/20 md:w-full"
              />
              <div>
                <h2 id="com-a-dra" className="font-display text-2xl text-espresso md:text-3xl">
                  {procedure.title} com a {SITE_NAME}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
                  A {SITE_NAME}, Cirurgiã Plástica especialista pela {catalog.credentials}, realiza{' '}
                  {procedure.title.toLowerCase()} no contexto da categoria {category.title}. A
                  indicação, a técnica e o plano de cuidados são definidos na consulta, de forma
                  individualizada.
                </p>
                <p className="mt-3 text-base leading-relaxed text-stone md:text-lg">
                  Atendimento online ou presencial em {catalog.city}.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={WHATSAPP.online} variant="filled" icon="globe">
                    Agendar consulta online
                  </Button>
                  <Button href={WHATSAPP.presencial} variant="outline" icon="pin">
                    Agendar consulta presencial
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <p className="mt-8 text-sm leading-relaxed text-stone/80">
            As informações desta página têm caráter educativo e não substituem avaliação médica
            presencial. Cada caso precisa ser analisado individualmente.
          </p>

          <section className="mt-14" aria-labelledby="outros-procedimentos">
            <h2 id="outros-procedimentos" className="font-display text-2xl text-espresso md:text-3xl">
              Outros procedimentos em {category.title}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.procedures
                .filter((item) => item.slug !== procedure.slug)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={procedurePath(category.slug, item.slug)}
                      className="group flex h-full items-start justify-between gap-3 border border-clay/15 bg-white p-5 transition hover:border-clay/40 hover:shadow-[0_12px_40px_-20px_rgba(196,91,79,0.35)]"
                    >
                      <h3 className="font-display text-lg leading-snug text-espresso transition group-hover:text-clay md:text-xl">
                        {item.title}
                      </h3>
                      <ArrowRight className="mt-1 size-5 shrink-0 text-clay" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="mt-6">
              <Link
                to={categoryPath(category.slug)}
                className="text-sm font-medium text-clay underline-offset-4 hover:underline"
              >
                Ver categoria {category.title}
              </Link>
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
