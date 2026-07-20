import { WHATSAPP } from '../data/content'
import Button from './Button'

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] overflow-hidden bg-porcelain">
      <div className="absolute inset-0 hero-fade">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(214,177,158,0.45),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(244,200,175,0.55),transparent_40%)]" />

        <img
          src="/assets/images/header-evelyne.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[58%_top] opacity-95 md:hidden"
        />
        <img
          src="/assets/images/header-evelyne.png"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-contain object-right object-bottom md:block"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-porcelain from-18% via-porcelain/85 via-45% to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-porcelain via-porcelain/88 to-transparent md:block" />
      </div>

      <div className="container-site relative z-10 flex flex-1 flex-col justify-end pb-10 pt-28 md:justify-center md:pb-16">
        <div className="max-w-2xl">
          <div className="hero-rise flex items-center gap-3">
            <span className="h-px w-8 bg-clay" aria-hidden="true" />
            <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-clay">
              Cirurgia Plástica · SBCP
            </p>
          </div>

          <h1 className="hero-rise hero-d1 mt-4 font-display text-[clamp(2.5rem,9vw,5.25rem)] leading-[0.95] font-medium tracking-[-0.03em] text-espresso">
            Dra. Evelyne
            <span className="mt-1 block font-light italic text-clay">Borges de Mattos</span>
          </h1>

          <p className="hero-rise hero-d2 mt-5 max-w-md text-base leading-relaxed text-stone md:text-lg">
            Transformando vidas com qualidade, segurança e dedicação. Consulta online ou presencial.
          </p>

          <div className="hero-rise hero-d3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button id="botao-consulta-online-topo" href={WHATSAPP.online} variant="filled" icon="globe">
              Consulta online
            </Button>
            <Button
              id="botao-consulta-presencial-topo"
              href={WHATSAPP.presencial}
              variant="outline"
              icon="pin"
              className="ring-clay/40 hover:bg-clay/15"
            >
              Consulta presencial
            </Button>
          </div>

          <div className="hero-rise hero-d4 mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t-2 border-clay/40 pt-4 text-[11px] tracking-[0.2em] uppercase text-espresso/60 md:w-fit md:justify-start md:gap-6">
            <span>CRM-MG 63.834</span>
            <span className="size-1 rounded-full bg-clay" aria-hidden="true" />
            <span>RQE 50.611</span>
            <span className="size-1 rounded-full bg-clay" aria-hidden="true" />
            <span>Varginha · MG</span>
          </div>
        </div>
      </div>
    </section>
  )
}
