import { LOCATIONS } from '../data/content'
import Rise from './Reveal'

export default function Locations() {
  return (
    <section id="enderecos" className="bg-espresso">
      {LOCATIONS.map((location) => (
        <article
          key={location.id}
          className="relative flex min-h-[420px] max-h-[520px] overflow-hidden md:min-h-[460px]"
        >
          <img
            src={location.background}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/70" />
          <div className="noise absolute inset-0 opacity-[0.06] mix-blend-overlay" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 py-12 md:px-8 md:py-14 lg:px-12">
            <Rise>
              <p className="font-display text-4xl text-porcelain/20 md:text-5xl">{location.number}</p>
              <h2 className="mt-1 font-display text-3xl tracking-[-0.02em] text-porcelain md:text-4xl">
                {location.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-porcelain/70 md:text-base">
                {location.subtitle}
              </p>
              <a
                id={location.id === 'online' ? 'botao-consulta-varginha' : undefined}
                href={location.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex bg-clay px-6 py-3 text-sm font-medium text-white transition hover:bg-clay-deep"
              >
                {location.cta.label}
              </a>
            </Rise>
          </div>
        </article>
      ))}
    </section>
  )
}
