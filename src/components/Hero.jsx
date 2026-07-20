import { WHATSAPP } from '../data/content'
import Button from './Button'

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] overflow-hidden bg-espresso">
      <div className="absolute inset-0 hero-fade">
        {/* Mobile: cover ancorado no topo para preservar o rosto */}
        <img
          src="/assets/images/header-evelyne.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[58%_top] opacity-90 md:hidden"
        />
        {/* Desktop: contain à direita — pessoa inteira, sem cortar a cabeça */}
        <img
          src="/assets/images/header-evelyne.png"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-contain object-right object-bottom opacity-95 md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/25 md:via-espresso/70 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/30 md:to-espresso/10" />
        <div className="noise absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-12 pt-28 md:justify-center md:px-8 md:pb-16 lg:px-12">
        <div className="max-w-2xl">
          <p className="hero-rise text-[11px] font-medium tracking-[0.35em] uppercase text-rose">
            Cirurgia Plástica · SBCP
          </p>

          <h1 className="hero-rise hero-d1 mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-medium tracking-[-0.03em] text-porcelain">
            Dra. Evelyne
            <span className="block font-light italic text-rose">Borges de Mattos</span>
          </h1>

          <p className="hero-rise hero-d2 mt-5 max-w-md text-base leading-relaxed text-porcelain/75 md:text-lg">
            Transformando vidas com qualidade, segurança e dedicação — consulta online ou presencial.
          </p>

          <div className="hero-rise hero-d3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button id="botao-consulta-online-topo" href={WHATSAPP.online} variant="filled">
              Consulta online
            </Button>
            <Button id="botao-consulta-presencial-topo" href={WHATSAPP.presencial} variant="ghost">
              Consulta presencial
            </Button>
          </div>
        </div>

        <div className="hero-rise hero-d4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-porcelain/15 pt-5 text-[11px] tracking-[0.2em] uppercase text-porcelain/50">
          <span>CRM-MG 63.834</span>
          <span>RQE 50.611</span>
          <span>Varginha · MG</span>
        </div>
      </div>
    </section>
  )
}
