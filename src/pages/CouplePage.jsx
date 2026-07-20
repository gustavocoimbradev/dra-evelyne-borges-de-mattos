import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import CoupleHeader from '../components/CoupleHeader'
import CoupleFooter from '../components/CoupleFooter'
import Button from '../components/Button'
import SeoHead from '../components/SeoHead'
import Rise from '../components/Reveal'
import PhotoCredit from '../components/PhotoCredit'
import { COUPLE_PAGE, coupleAbsoluteUrl } from '../data/couple'
import { SITE_NAME, SITE_URL } from '../data/procedures'

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-clay/20">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-espresso md:text-xl">{item.question}</span>
        <span
          className={`mt-1 shrink-0 text-clay transition ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open ? (
        <p className="pb-5 text-sm leading-relaxed text-stone md:text-base">{item.answer}</p>
      ) : null}
    </div>
  )
}

function ClinicCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const total = images.length

  const go = useCallback(
    (next) => {
      setIndex((next + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (total < 2) return undefined
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 4500)
    return () => window.clearInterval(id)
  }, [total])

  const photo = images[index]

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden bg-mist lg:min-h-[520px]">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-espresso/60 via-espresso/25 to-transparent p-4 pt-16">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-porcelain/80">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
          <div className="flex gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1 transition-all ${i === index ? 'w-6 bg-porcelain' : 'w-2 bg-porcelain/40'}`}
                aria-label={`Ir para foto ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="grid size-9 place-items-center bg-porcelain/15 text-porcelain ring-1 ring-porcelain/25 backdrop-blur-sm transition hover:bg-porcelain/30"
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="grid size-9 place-items-center bg-porcelain/15 text-porcelain ring-1 ring-porcelain/25 backdrop-blur-sm transition hover:bg-porcelain/30"
            aria-label="Próxima foto"
          >
            ›
          </button>
        </div>
      </div>

      <span className="sr-only">{photo?.alt}</span>
    </div>
  )
}

function TestimonialsCarousel({ items }) {
  const [page, setPage] = useState(0)
  const [perView, setPerView] = useState(4)
  const total = items.length
  const paused = useRef(false)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1100px)').matches) setPerView(4)
      else if (window.matchMedia('(min-width: 768px)').matches) setPerView(3)
      else setPerView(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const pages = useMemo(() => {
    const chunks = []
    for (let i = 0; i < total; i += perView) {
      chunks.push(items.slice(i, i + perView))
    }
    return chunks.length ? chunks : [[]]
  }, [items, perView, total])

  const pageCount = pages.length

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1))
  }, [pageCount])

  const go = useCallback(
    (next) => {
      setPage((next + pageCount) % pageCount)
    },
    [pageCount],
  )

  useEffect(() => {
    if (pageCount < 2) return undefined
    const id = window.setInterval(() => {
      if (paused.current) return
      setPage((current) => (current + 1) % pageCount)
    }, 7000)
    return () => window.clearInterval(id)
  }, [pageCount])

  if (!total) return null

  const colClass =
    perView >= 4 ? 'grid-cols-4' : perView === 3 ? 'grid-cols-3' : 'grid-cols-1'

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        paused.current = true
      }}
      onMouseLeave={() => {
        paused.current = false
      }}
      onFocusCapture={() => {
        paused.current = true
      }}
      onBlurCapture={() => {
        paused.current = false
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((chunk, pageIndex) => (
            <div
              key={pageIndex}
              className={`grid w-full shrink-0 gap-3 md:gap-4 ${colClass}`}
              aria-hidden={pageIndex !== page}
            >
              {chunk.map((testimonial) => (
                <blockquote key={testimonial.name} className="h-full">
                  <div className="flex h-full min-h-[220px] flex-col border border-clay/15 bg-porcelain/60 p-5 md:min-h-[260px] md:p-6">
                    <p className="flex-1 text-sm leading-relaxed text-stone md:text-[15px]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <footer className="mt-5 border-t border-clay/15 pt-4">
                      <cite className="not-italic font-display text-lg text-espresso">
                        {testimonial.name}
                      </cite>
                    </footer>
                  </div>
                </blockquote>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="order-2 text-[11px] font-medium tracking-[0.16em] uppercase text-stone/60 sm:order-1">
          {String(page + 1).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}
        </p>

        <div className="order-1 flex gap-1.5 sm:order-2">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-1 transition-all ${i === page ? 'w-6 bg-clay' : 'w-2 bg-clay/35'}`}
              aria-label={`Ir para página ${i + 1}`}
              aria-current={i === page}
            />
          ))}
        </div>

        <div className="order-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(page - 1)}
            className="grid size-9 place-items-center text-espresso ring-1 ring-clay/30 transition hover:bg-clay/15"
            aria-label="Depoimentos anteriores"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(page + 1)}
            className="grid size-9 place-items-center text-espresso ring-1 ring-clay/30 transition hover:bg-clay/15"
            aria-label="Próximos depoimentos"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CouplePage() {
  const [openFaq, setOpenFaq] = useState(0)
  const page = COUPLE_PAGE
  const canonical = coupleAbsoluteUrl(SITE_URL)

  const seo = {
    title: `${page.seoTitle || page.title} | ${SITE_NAME}`,
    description: page.description,
    canonical,
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: page.eyebrow, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }

  return (
    <div className="min-h-svh bg-porcelain text-espresso">
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        image={`${SITE_URL}${page.image}`}
        jsonLd={jsonLd}
      />
      <CoupleHeader />

      <main>
        <section id="topo" className="relative flex min-h-[100svh] overflow-hidden bg-porcelain">
          <div className="absolute inset-0 hero-fade">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(214,177,158,0.45),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(244,200,175,0.55),transparent_40%)]" />

            <img
              src={page.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top opacity-95 md:hidden"
            />
            <img
              src={page.image}
              alt=""
              className="absolute inset-0 hidden h-full w-full object-contain object-right object-bottom md:block"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-porcelain from-18% via-porcelain/85 via-45% to-transparent md:hidden" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-porcelain via-porcelain/88 to-transparent md:block" />
          </div>

          <div className="container-site relative z-10 flex flex-1 flex-col justify-end pb-10 pt-28 md:justify-center md:pb-16">
            <div className="max-w-xl lg:max-w-2xl">
              <div className="hero-rise flex items-center gap-3">
                <span className="h-px w-8 bg-clay" aria-hidden="true" />
                <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-clay">
                  {page.eyebrow}
                </p>
              </div>

              <h1 className="hero-rise hero-d1 mt-4 font-display text-[clamp(2.75rem,9.5vw,5.5rem)] leading-[0.92] font-medium tracking-[-0.03em] text-espresso">
                Redefina seu
                <span className="mt-1 block font-light italic text-clay">contorno corporal</span>
              </h1>

              <p className="hero-rise hero-d2 mt-5 max-w-md text-base leading-relaxed text-stone md:text-lg">
                {page.heroSupport}
              </p>

              <div className="hero-rise hero-d3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={page.ctas.evelyne.href} variant="filled" icon="pin">
                  {page.ctas.evelyne.label}
                </Button>
                <Button
                  href={page.ctas.italo.href}
                  variant="outline"
                  icon="calendar"
                  className="ring-clay/40 hover:bg-clay/10"
                >
                  {page.ctas.italo.label}
                </Button>
              </div>

              <div className="hero-rise hero-d4 mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t-2 border-clay/30 pt-4 text-[11px] tracking-[0.2em] uppercase text-espresso/60 md:w-fit md:justify-start md:gap-6">
                <span>Dra. Evelyne</span>
                <span className="size-1 rounded-full bg-clay" aria-hidden="true" />
                <span>Dr. Ítalo</span>
                <span className="size-1 rounded-full bg-clay" aria-hidden="true" />
                <span>SBCP</span>
              </div>

              <PhotoCredit
                credit={page.credit}
                creditUrl={page.creditUrl}
                className="hero-rise hero-d4 mt-5"
              />
            </div>
          </div>
        </section>

        {/* Intro + equal bios */}
        <section id="casal-intro" className="bg-white">
          <div className="container-site py-14 lg:py-20">
            <Rise>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">
                  Formação em comum
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Anos de estudo, conexão e cuidado em cada detalhe
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">{page.intro}</p>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">{page.closing}</p>
              </div>
            </Rise>

            <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-8 lg:gap-10">
              {page.people.map((person, index) => (
                <Rise key={person.name} delay={index + 1}>
                  <article className="flex h-full flex-col border border-clay/15 bg-porcelain/50">
                    <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                      <img
                        src={person.image}
                        alt={person.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-clay">
                        {person.role}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-espresso md:text-3xl">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm text-stone">{person.origin}</p>
                      <p className="mt-2 text-xs tracking-[0.08em] text-clay">{person.credentials}</p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-stone md:text-base">
                        {person.bio}
                      </p>
                      <div className="mt-6">
                        <Button href={person.cta.href} variant="filled" icon="calendar" className="!w-full">
                          {person.cta.label}
                        </Button>
                      </div>
                    </div>
                  </article>
                </Rise>
              ))}
            </div>

            <Rise delay={2} className="mt-8">
              <PhotoCredit credit={page.credit} creditUrl={page.creditUrl} />
            </Rise>
          </div>
        </section>

        {/* Partnership — both */}
        <section className="bg-mist">
          <div className="container-site grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
            <Rise className="lg:col-span-6">
              <figure>
                <div className="overflow-hidden">
                  <img
                    src={page.partnership.image}
                    alt={page.imageAlt}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover object-[center_25%]"
                  />
                </div>
                <figcaption className="mt-3">
                  <PhotoCredit credit={page.credit} creditUrl={page.creditUrl} />
                </figcaption>
              </figure>
            </Rise>
            <div className="lg:col-span-6">
              <Rise>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">
                  Parceria
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  {page.partnership.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">
                  {page.partnership.text}
                </p>
              </Rise>
              <Rise delay={1} className="mt-8 grid grid-cols-2 gap-6 border-y-2 border-clay/20 py-6">
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-stone">Dra. Evelyne</p>
                  <p className="mt-1 font-display text-xl text-clay md:text-2xl">63.834</p>
                  <p className="mt-0.5 text-xs text-stone">CRM-MG · RQE 50.611</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-stone">Dr. Ítalo</p>
                  <p className="mt-1 font-display text-xl text-clay md:text-2xl">63.355</p>
                  <p className="mt-0.5 text-xs text-stone">CRM-MG · RQE 53.525</p>
                </div>
              </Rise>
            </div>
          </div>
        </section>

        {/* Stats — team */}
        <section className="bg-espresso text-porcelain">
          <div className="container-site py-14 lg:py-16">
            <Rise>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-rose">
                  Nossa equipe
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] md:text-4xl">
                  Uma das poucas equipes do Sul de Minas que opera todos os dias
                </h2>
                <p className="mt-4 text-porcelain/70">
                  A excelência vem através da repetição prática diária.
                </p>
              </div>
            </Rise>

            <div className="mt-12 grid gap-6 border-y border-porcelain/10 py-10 sm:grid-cols-3">
              {page.stats.map((stat, index) => (
                <Rise key={stat.label} delay={index + 1} className="text-center">
                  <p className="font-display text-4xl text-rose md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm tracking-[0.12em] uppercase text-porcelain/60">
                    {stat.label}
                  </p>
                </Rise>
              ))}
            </div>

            <Rise delay={2} className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
              <ul className="space-y-3">
                {page.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-porcelain/80">
                      <span className="mt-2 size-1.5 shrink-0 bg-rose" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="grid gap-3 sm:grid-cols-2">
                {page.practicePoints.map((item) => (
                  <li
                    key={item}
                    className="border border-porcelain/10 bg-espresso-soft/60 px-4 py-3 text-sm text-porcelain/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Rise>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="bg-white">
          <div className="container-site py-14 lg:py-20">
            <Rise>
              <div className="max-w-2xl">
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">
                  Por que nós
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Por que escolher o Casal da Plástica?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
                  Não é só a soma de dois currículos — é uma parceria de formação, decisão e cuidado
                  em cada etapa.
                </p>
              </div>
            </Rise>

            <div className="mt-12 grid gap-0 border-t border-clay/20 md:grid-cols-3">
              {page.benefits.map((benefit, index) => (
                <Rise key={benefit.title} delay={index + 1}>
                  <article className="border-b border-clay/20 px-0 py-8 md:border-b-0 md:border-r md:border-clay/20 md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <p className="font-display text-3xl text-clay/40">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-4 font-display text-2xl text-espresso">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone md:text-base">
                      {benefit.description}
                    </p>
                  </article>
                </Rise>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic */}
        <section id="consultorio" className="bg-mist">
          <div className="container-site grid items-stretch gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
            <div className="flex flex-col justify-center lg:col-span-5">
              <Rise>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">
                  Consultório
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Cirurgia Plástica em Varginha/MG
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone">
                  O consultório do Casal da Plástica fica na {page.address.full}. Um espaço moderno,
                  confortável e acolhedor, pensado para privacidade, tranquilidade e segurança.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {page.clinicPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-espresso/85">
                      <span className="size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={page.ctas.evelyne.href} variant="filled" icon="pin">
                    {page.ctas.evelyne.label}
                  </Button>
                  <Button href={page.ctas.italo.href} variant="outline" icon="calendar">
                    {page.ctas.italo.label}
                  </Button>
                </div>
              </Rise>
            </div>
            <Rise delay={1} className="lg:col-span-7">
              <figure>
                <ClinicCarousel images={page.clinicImages} />
                <figcaption className="mt-3">
                  <PhotoCredit credit={page.credit} creditUrl={page.creditUrl} />
                </figcaption>
              </figure>
            </Rise>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-porcelain">
          <div className="container-site py-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <Rise className="lg:col-span-4">
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">FAQ</p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Dúvidas que alguns pacientes podem ter
                </h2>
              </Rise>
              <Rise delay={1} className="lg:col-span-8">
                <div>
                  {page.faq.map((item, index) => (
                    <FaqItem
                      key={item.question}
                      item={item}
                      open={openFaq === index}
                      onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                    />
                  ))}
                </div>
              </Rise>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white">
          <div className="container-site py-14 lg:py-16">
            <Rise>
              <div className="max-w-2xl">
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">
                  Depoimentos
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Pacientes que confiaram no nosso cuidado
                </h2>
              </div>
            </Rise>

            <Rise delay={1} className="mt-10">
              <TestimonialsCarousel items={page.testimonials} />
            </Rise>
          </div>
        </section>
      </main>

      <CoupleFooter />
    </div>
  )
}
