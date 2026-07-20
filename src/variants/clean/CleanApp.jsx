import { useEffect, useState } from 'react'
import {
  FORMATION,
  LOCATIONS,
  MARQUEE,
  NAV_ITEMS,
  PROCEDURES,
  SOCIAL,
  VIDEOS,
  WHATSAPP,
} from '../../data/content'
import Button from '../../components/Button'
import Rise from '../../components/Reveal'
import VideoModal from '../../components/VideoModal'
import {
  IconAward,
  IconClose,
  IconDoctor,
  IconGraduation,
  IconHospital,
  IconMenu,
  IconPlay,
  IconFacebook,
  IconInstagram,
} from '../../components/Icons'

const FORMATION_ICONS = {
  hospital: IconHospital,
  doctor: IconDoctor,
  graduation: IconGraduation,
  award: IconAward,
}

const online = LOCATIONS.find((item) => item.id === 'online')
const presencial = LOCATIONS.find((item) => item.id === 'presencial')

function CleanHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-espresso/8 bg-white/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-8 lg:px-12">
          <a href="#topo" className="relative z-20" onClick={() => setOpen(false)}>
            <img
              src="/assets/images/logo.webp"
              alt="Dra. Evelyne Borges de Mattos"
              className="h-8 w-auto brightness-0 md:h-9"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-8" aria-label="Menu">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium tracking-[0.14em] uppercase text-stone transition hover:text-espresso"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button href={WHATSAPP.online} variant="filled" icon="calendar" className="px-5 py-2.5 text-[13px]">
              Agendar consulta
            </Button>
          </div>

          <button
            type="button"
            className="relative z-20 grid size-10 place-items-center text-espresso lg:hidden"
            aria-label={open ? 'Fechar' : 'Menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 lg:hidden ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8 pt-16">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-espresso transition hover:text-clay sm:text-5xl"
            >
              {item.label}
            </a>
          ))}
          <Button
            href={WHATSAPP.online}
            variant="filled"
            icon="calendar"
            className="mt-10"
            onClick={() => setOpen(false)}
          >
            Agendar consulta
          </Button>
        </nav>
      </div>
    </>
  )
}

function CleanHero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] overflow-hidden bg-[#fffcfa]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(231,207,199,0.45),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(196,91,79,0.08),transparent_45%)]" />

        <img
          src="/assets/images/header-evelyne.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[58%_top] opacity-90 md:hidden"
        />
        <img
          src="/assets/images/header-evelyne.png"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-contain object-right object-bottom md:block"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#fffcfa] from-25% via-[#fffcfa]/75 via-50% to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#fffcfa] via-[#fffcfa]/85 to-transparent md:block" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:justify-center md:px-8 md:pb-16 lg:px-12">
        <div className="max-w-2xl">
          <p className="hero-rise text-[11px] font-medium tracking-[0.35em] uppercase text-clay">
            Cirurgia Plástica · SBCP
          </p>
          <h1 className="hero-rise hero-d1 mt-3 font-display text-[clamp(2.35rem,9vw,5rem)] leading-[0.95] font-medium tracking-[-0.03em] text-espresso md:mt-4">
            Dra. Evelyne
            <span className="block font-light italic text-clay">Borges de Mattos</span>
          </h1>
          <p className="hero-rise hero-d2 mt-4 max-w-md text-base leading-relaxed text-stone md:mt-5 md:text-lg">
            Transformando vidas com qualidade, segurança e dedicação — consulta online ou presencial.
          </p>
          <div className="hero-rise hero-d3 mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8">
            <Button href={WHATSAPP.online} variant="filled" icon="globe">
              Consulta online
            </Button>
            <Button href={WHATSAPP.presencial} variant="outline" icon="pin">
              Consulta presencial
            </Button>
          </div>
          <div className="hero-rise hero-d4 mt-7 w-full border-t border-espresso/10 pt-4 text-center text-[11px] tracking-[0.2em] uppercase text-stone md:mt-8 md:w-fit md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start">
              <span>CRM-MG 63.834</span>
              <span>RQE 50.611</span>
              <span>Varginha · MG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CleanMarquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <div className="overflow-hidden border-y border-espresso/8 bg-white py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm tracking-[0.2em] uppercase text-stone"
          >
            {item}
            <span className="inline-block size-1.5 rounded-full bg-clay/70" />
          </span>
        ))}
      </div>
    </div>
  )
}

function CleanAbout() {
  return (
    <section id="quemsoueu" className="bg-white">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-20">
        <Rise className="relative z-0 lg:col-span-5 lg:pr-6">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className="absolute -right-2 -bottom-2 h-full w-full border border-clay/20 md:-right-3 md:-bottom-3"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden bg-mist">
              <img
                src="/assets/images/evelyne.webp"
                alt="Dra. Evelyne Borges de Mattos"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
                <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-white">SBCP · AMB</p>
                <p className="font-display text-sm text-white">Estética &amp; Reparadora</p>
              </div>
            </div>
          </div>
        </Rise>

        <div className="flex flex-col justify-center lg:col-span-7 lg:pl-4">
          <Rise>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Quem sou eu</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-[1.05] tracking-[-0.02em] text-espresso md:text-4xl lg:text-5xl">
              Especialista em remodelar confiança
            </h2>
          </Rise>
          <Rise delay={1} className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-stone">
            <p>
              Cirurgiã Plástica especialista pela Sociedade Brasileira de Cirurgia Plástica (SBCP) e
              Associação Médica Brasileira (AMB).
            </p>
            <p>Atuação em Cirurgia Plástica estética e reparadora.</p>
          </Rise>
          <Rise delay={2} className="mt-8 grid max-w-md grid-cols-2 gap-6 border-y border-espresso/10 py-5">
            <div>
              <p className="font-display text-2xl text-espresso">63.834</p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-stone">CRM-MG</p>
            </div>
            <div>
              <p className="font-display text-2xl text-espresso">50.611</p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-stone">RQE</p>
            </div>
          </Rise>
          <Rise delay={3} className="mt-8">
            <Button href={SOCIAL.lattes} variant="outline" icon="lattes">
              Currículo Lattes
            </Button>
          </Rise>
        </div>
      </div>

      <div className="border-t border-espresso/8 bg-mist">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
          <Rise>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Trajetória</p>
                <h3 className="mt-2 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Formação
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-stone">
                Uma trajetória construída em instituições de referência em medicina e cirurgia.
              </p>
            </div>
          </Rise>

          <ol className="relative mt-12 space-y-5 md:mt-14 md:space-y-0">
            <span
              className="absolute top-6 bottom-6 left-6 w-px -translate-x-1/2 bg-gradient-to-b from-clay via-clay/40 to-espresso/10 md:left-7"
              aria-hidden="true"
            />
            {FORMATION.map((item, index) => {
              const Icon = FORMATION_ICONS[item.icon] || IconGraduation
              const number = String(index + 1).padStart(2, '0')
              return (
                <Rise key={`${item.place}-${item.year}`} delay={(index % 4) + 1}>
                  <li className="relative flex gap-4 py-0 md:grid md:grid-cols-[auto_1fr] md:gap-8 md:py-6">
                    <div className="relative z-10 flex shrink-0 flex-col items-center gap-2">
                      <div className="grid size-12 place-items-center bg-clay text-white ring-[6px] ring-mist md:size-14 [&_svg]:size-6 [&_svg]:brightness-0 [&_svg]:invert">
                        <Icon />
                      </div>
                      <span className="font-display text-sm text-espresso/25 md:hidden">{number}</span>
                    </div>
                    <div className="min-w-0 flex-1 border border-espresso/8 bg-white p-4 sm:p-5 md:flex md:items-start md:gap-8 md:p-6">
                      <span className="hidden shrink-0 font-display text-4xl leading-none text-espresso/15 md:block">
                        {number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="inline-flex bg-rose/60 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-clay-deep">
                          {item.year}
                        </span>
                        <h4 className="mt-3 font-display text-xl leading-snug text-espresso md:text-2xl">
                          {item.place}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-stone md:text-base">{item.detail}</p>
                      </div>
                    </div>
                  </li>
                </Rise>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

function CleanProcedures() {
  return (
    <section id="procedimentos" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
        <Rise>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Procedimentos</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-espresso md:text-5xl">
              O que eu realizo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
              Escolha a área de interesse e veja os procedimentos disponíveis. Cada plano é montado de
              forma individual na consulta.
            </p>
          </div>
        </Rise>

        <div className="mt-12 space-y-4 md:mt-14">
          {PROCEDURES.map((procedure, index) => (
            <Rise key={procedure.title} delay={(index % 4) + 1}>
              <article className="border border-espresso/8 bg-mist/50 transition hover:border-clay/25">
                <div className="grid gap-6 p-5 md:grid-cols-[140px_1fr] md:items-start md:gap-8 md:p-7 lg:grid-cols-[160px_220px_1fr]">
                  <div className="flex items-center gap-4 md:block">
                    <div className="relative size-24 shrink-0 overflow-hidden md:size-36 lg:size-40">
                      <img
                        src={procedure.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-display text-3xl text-espresso/15 md:mt-3 md:block md:text-4xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:pt-1">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-clay">
                      Categoria
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-espresso md:text-3xl">
                      {procedure.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone">
                      {procedure.items.length} procedimento{procedure.items.length > 1 ? 's' : ''}
                    </p>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-2.5">
                    {procedure.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 border-b border-espresso/8 pb-2.5 text-sm leading-snug text-espresso/85"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Rise>
          ))}
        </div>

        <Rise className="mt-10 flex flex-col items-stretch gap-4 border-t border-espresso/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-stone">
            Quer saber qual procedimento combina com o seu objetivo? Agende uma avaliação.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={WHATSAPP.online} variant="filled" icon="globe">
              Consulta online
            </Button>
            <Button href={WHATSAPP.presencial} variant="outline" icon="pin">
              Consulta presencial
            </Button>
          </div>
        </Rise>
      </div>
    </section>
  )
}

function CleanVideos({ onOpenVideo }) {
  return (
    <>
      <section id="videos" className="bg-mist">
        <div className="mx-auto max-w-[1400px] px-5 pt-14 pb-8 md:px-8 lg:px-12 lg:pt-16">
          <Rise>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Conteúdo</p>
                <h2 className="mt-2 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Em vídeo
                </h2>
              </div>
              <p className="max-w-xs text-sm text-stone">
                Respostas honestas sobre procedimentos, expectativas e o meu trabalho.
              </p>
            </div>
          </Rise>
        </div>

        <div className="hide-scrollbar mx-auto flex max-w-[1400px] snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:gap-5 md:px-8 lg:px-12">
          {VIDEOS.map((video, index) => (
            <Rise
              key={video.id}
              delay={(index % 4) + 1}
              className="w-[70vw] max-w-[280px] shrink-0 snap-center sm:w-[42vw] lg:w-[22%]"
            >
              <button
                type="button"
                onClick={() => onOpenVideo(video)}
                className="group relative block w-full overflow-hidden text-left"
                aria-label={`Assistir: ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/4] max-h-[380px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 grid size-10 place-items-center bg-white/95 text-espresso transition group-hover:bg-clay group-hover:text-white">
                  <IconPlay className="size-4 translate-x-px" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="font-display text-xl text-white md:text-2xl">{video.title}</span>
                </span>
              </button>
            </Rise>
          ))}
        </div>

        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-8 sm:flex-row md:px-8 lg:px-12">
          <Button href={WHATSAPP.online} variant="filled" icon="globe">
            Consulta online
          </Button>
          <Button href={WHATSAPP.presencial} variant="outline" icon="pin">
            Consulta presencial
          </Button>
        </div>
      </section>

      <section id="posts" className="bg-rose">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-5 py-10 text-center md:flex-row md:items-center md:justify-between md:px-8 md:text-left lg:px-12">
          <Rise>
            <h2 className="font-display text-2xl text-espresso md:text-3xl">Bastidores no Instagram</h2>
            <p className="mt-1 text-sm text-stone">@draevelyneborgesdemattos</p>
          </Rise>
          <Rise delay={2} className="w-full md:w-auto">
            <Button
              href={SOCIAL.instagram}
              variant="filled"
              id="botao-instagram"
              icon="instagram"
              className="!w-full md:!w-auto"
            >
              Seguir no Instagram
            </Button>
          </Rise>
        </div>
      </section>
    </>
  )
}

function CleanLocations() {
  return (
    <section id="enderecos" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
        <Rise>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Agendar</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-5xl">
              Como prefere ser atendida?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
              Escolha a modalidade que faz mais sentido para você — online ou presencial em Varginha.
            </p>
          </div>
        </Rise>

        <div className="mt-12 grid items-stretch gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <Rise delay={1}>
            <article className="relative flex h-full flex-col overflow-hidden bg-mist ring-1 ring-espresso/8">
              <div className="relative h-48 overflow-hidden md:h-56">
                <img
                  src={online.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-center md:object-[58%_22%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mist via-mist/40 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col p-6 text-center md:p-8 md:text-left">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-clay">
                  {online.tagline}
                </p>
                <h3 className="mt-2 font-display text-2xl text-espresso md:text-3xl">{online.title}</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone md:mx-0 md:text-base">
                  {online.description}
                </p>
                <ul className="mt-6 flex flex-col items-center space-y-2.5 md:items-start">
                  {online.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center justify-center gap-2.5 text-sm text-espresso/85 md:justify-start"
                    >
                      <span className="size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Button href={online.cta.href} variant="filled" className="!w-full" icon="globe">
                    {online.cta.label}
                  </Button>
                </div>
              </div>
            </article>
          </Rise>

          <Rise delay={2}>
            <article className="relative flex h-full flex-col overflow-hidden bg-white ring-1 ring-espresso/10">
              <div className="relative h-48 overflow-hidden md:h-56">
                <img
                  src={presencial.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/35 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col p-6 text-center md:p-8 md:text-left">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-clay">
                  {presencial.tagline}
                </p>
                <h3 className="mt-2 font-display text-2xl text-espresso md:text-3xl">
                  {presencial.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone md:mx-0 md:text-base">
                  {presencial.description}
                </p>
                {presencial.address ? (
                  <div className="mt-6 border border-espresso/10 border-l-2 border-l-clay bg-mist px-4 py-3.5 text-center md:text-left">
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-clay">
                      Endereço
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-espresso">
                      {presencial.address.street}
                      <br />
                      {presencial.address.neighborhood} · {presencial.address.city}
                      <br />
                      <span className="font-normal text-stone">CEP {presencial.address.zip}</span>
                    </p>
                  </div>
                ) : null}
                <ul className="mt-5 flex flex-col items-center space-y-2.5 md:items-start">
                  {presencial.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center justify-center gap-2.5 text-sm text-espresso/85 md:justify-start"
                    >
                      <span className="size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Button href={presencial.cta.href} variant="outline" className="!w-full" icon="pin">
                    {presencial.cta.label}
                  </Button>
                </div>
              </div>
            </article>
          </Rise>
        </div>
      </div>
    </section>
  )
}

function CleanFooter() {
  return (
    <footer id="colophon" className="border-t border-espresso/8 bg-mist text-espresso">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 border-b border-espresso/8 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/assets/images/footer-logo.webp"
              alt="Dra. Evelyne Borges de Mattos"
              className="w-36 brightness-0"
            />
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight tracking-[-0.02em] text-espresso md:text-3xl">
              Pronta para o próximo passo?
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={WHATSAPP.online} variant="filled" icon="globe">
                Online
              </Button>
              <Button href={WHATSAPP.presencial} variant="outline" icon="pin">
                Presencial
              </Button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone/70">Navegação</p>
              <ul className="mt-5 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-stone transition hover:text-espresso">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone/70">Social</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone transition hover:text-espresso"
                  >
                    <IconInstagram className="size-3.5" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone transition hover:text-espresso"
                  >
                    <IconFacebook className="size-3.5" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone/70">Registro</p>
              <p className="mt-5 text-sm leading-relaxed text-stone">
                CRM-MG 63.834
                <br />
                RQE 50.611
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-stone md:flex-row md:items-center md:justify-between">
          <p>© Dra. Evelyne Borges de Mattos</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://www.gustavocoimbra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-espresso/70 transition hover:text-espresso"
            >
              Gustavo Coimbra
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function CleanApp() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <div className="min-h-svh bg-[#fffcfa] text-espresso">
      <a
        href="/"
        className="fixed right-3 bottom-3 z-[60] rounded-full bg-espresso px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-white/90 shadow-lg transition hover:bg-clay"
      >
        Voltar à home
      </a>
      <CleanHeader />
      <main>
        <CleanHero />
        <CleanMarquee />
        <CleanAbout />
        <CleanProcedures />
        <CleanVideos onOpenVideo={setActiveVideo} />
        <CleanLocations />
      </main>
      <CleanFooter />
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onChange={setActiveVideo}
      />
    </div>
  )
}
