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
  SITE_URL,
  categoryPageSchema,
  categorySeo,
  getCategory,
  procedurePath,
} from '../data/procedures'
import catalog from '../data/procedures-catalog.json'

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)

  if (!category) {
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

  const seo = categorySeo(category)
  const jsonLd = categoryPageSchema(category)

  return (
    <div className="min-h-svh bg-porcelain text-espresso">
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        author={AUTHOR.name}
        image={`${SITE_URL}${category.image}`}
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-[4.5rem] pb-16 md:pt-20">
        <InternalBanner eyebrow="Categoria" title={category.title} description={category.whatIs} />
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
            <li className="text-espresso">{category.title}</li>
          </ol>
        </BreadcrumbBar>

        <div className="container-site mt-12 md:mt-14">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-10 lg:col-span-7">
              <section aria-labelledby="o-que-e">
                <h2 id="o-que-e" className="font-display text-2xl text-espresso md:text-3xl">
                  O que é
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">{category.whatIs}</p>
              </section>

              <section aria-labelledby="como-funciona">
                <h2 id="como-funciona" className="font-display text-2xl text-espresso md:text-3xl">
                  Como funciona
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
                  {category.howItWorks}
                </p>
              </section>

              <section aria-labelledby="lista-procedimentos">
                <h2 id="lista-procedimentos" className="font-display text-2xl text-espresso md:text-3xl">
                  Procedimentos
                </h2>
                <ul className="mt-5 space-y-3">
                  {category.procedures.map((procedure) => (
                    <li key={procedure.slug}>
                      <Link
                        to={procedurePath(category.slug, procedure.slug)}
                        className="group inline-flex items-center gap-2 text-base text-espresso transition hover:text-clay md:text-lg"
                      >
                        <span className="underline-offset-4 group-hover:underline">{procedure.title}</span>
                        <ArrowRight
                          className="size-4 shrink-0 text-clay opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
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
                  {category.title} com a {SITE_NAME}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
                  A {SITE_NAME}, Cirurgiã Plástica especialista pela {catalog.credentials}, realiza{' '}
                  {category.title.toLowerCase()} com avaliação individualizada. A indicação e o plano
                  de cuidados são definidos na consulta.
                </p>
                <p className="mt-3 text-base leading-relaxed text-stone md:text-lg">
                  Atendimento online ou presencial em {catalog.city}.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={WHATSAPP.online} variant="filled" icon="globe">
                    Consulta online
                  </Button>
                  <Button href={WHATSAPP.presencial} variant="outline" icon="pin">
                    Consulta presencial
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <p className="mt-8 text-sm leading-relaxed text-stone/80">
            As informações desta página têm caráter educativo e não substituem avaliação médica
            presencial. Cada caso precisa ser analisado individualmente.
          </p>

          <p className="mt-8 text-sm text-stone">
            <Link to="/#procedimentos" className="text-clay underline-offset-4 hover:underline">
              Ver todas as categorias
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
