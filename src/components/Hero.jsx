import { WHATSAPP } from '../data/content'
import Button from './Button'

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] overflow-hidden bg-espresso">
      <div className="absolute inset-0 hero-fade">
        {/* Stock spa + textura — mais forte no desktop */}
        <div className="hero-bg absolute inset-0 overflow-hidden opacity-40 md:opacity-100">
          <img
            src="/assets/images/hero-bg.jpg"
            alt=""
            className="hero-bg-img absolute inset-0 h-full w-full scale-110 object-cover"
          />
          <div className="absolute inset-0 bg-espresso/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-clay/20 mix-blend-soft-light" />
          <div className="hero-film absolute inset-0" aria-hidden="true" />
          <div className="hero-grain absolute inset-0 opacity-[0.22] mix-blend-overlay" aria-hidden="true" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/78 to-espresso/35 md:to-espresso/15" />

        {/* Mobile: retrato só na faixa superior, sem brigar com o texto */}
        <div className="absolute inset-x-0 top-0 h-[52svh] overflow-hidden md:hidden">
          <img
            src="/assets/images/header-evelyne.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[58%_top]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/25 to-espresso/20" />
        </div>

        {/* Desktop: pessoa inteira à direita */}
        <img
          src="/assets/images/header-evelyne.png"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-contain object-right object-bottom md:block"
        />

        {/* Scrim: mobile sólido sob o texto; desktop fade suave */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-espresso from-35% via-espresso/95 to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-espresso via-transparent to-espresso/25 md:block" />
        <div className="noise absolute inset-0 opacity-[0.08] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:justify-center md:px-8 md:pb-16 lg:px-12">
        <div className="max-w-2xl">
          <p className="hero-rise text-[11px] font-medium tracking-[0.35em] uppercase text-rose">
            Cirurgia Plástica · SBCP
          </p>

          <h1 className="hero-rise hero-d1 mt-3 font-display text-[clamp(2.35rem,9vw,5rem)] leading-[0.95] font-medium tracking-[-0.03em] text-porcelain drop-shadow-[0_2px_12px_rgba(28,20,18,0.45)] md:mt-4 md:drop-shadow-none">
            Dra. Evelyne
            <span className="block font-light italic text-rose">Borges de Mattos</span>
          </h1>

          <p className="hero-rise hero-d2 mt-4 max-w-md text-base leading-relaxed text-porcelain/90 md:mt-5 md:text-lg md:text-porcelain/75">
            Transformando vidas com qualidade, segurança e dedicação — consulta online ou presencial.
          </p>

          <div className="hero-rise hero-d3 mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8">
            <Button id="botao-consulta-online-topo" href={WHATSAPP.online} variant="filled" icon="globe">
              Consulta online
            </Button>
            <Button id="botao-consulta-presencial-topo" href={WHATSAPP.presencial} variant="ghost" icon="pin">
              Consulta presencial
            </Button>
          </div>

          <div className="hero-rise hero-d4 mt-7 w-fit border-t border-porcelain/20 pt-4 text-[11px] tracking-[0.2em] uppercase text-porcelain/65 md:mt-8 md:border-porcelain/15 md:text-porcelain/50">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
