import { LOCATIONS } from '../data/content'
import Button from './Button'
import Rise from './Reveal'
import { IconGlobe, IconPin } from './Icons'

const ICONS = {
  online: IconGlobe,
  presencial: IconPin,
}

export default function Locations() {
  return (
    <section id="enderecos" className="bg-mist">
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

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {LOCATIONS.map((location, index) => {
            const Icon = ICONS[location.id] || IconGlobe

            return (
              <Rise key={location.id} delay={index + 1}>
                <article className="flex h-full flex-col overflow-hidden border border-espresso/10 bg-porcelain">
                  <div className="relative h-44 overflow-hidden md:h-52">
                    <img
                      src={location.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-espresso/10" />
                    <div className="absolute left-5 top-5 grid size-11 place-items-center bg-porcelain text-clay">
                      <Icon className="size-5" />
                    </div>
                    <p className="absolute bottom-4 left-5 text-[10px] font-semibold tracking-[0.22em] uppercase text-porcelain">
                      Opção {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-clay">
                      {location.tagline}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-espresso md:text-3xl">{location.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone md:text-base">{location.description}</p>

                    {location.address ? (
                      <div className="mt-5 border border-espresso/10 bg-mist px-4 py-3">
                        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-clay">
                          Endereço
                        </p>
                        <p className="mt-1.5 text-sm font-medium leading-relaxed text-espresso">
                          {location.address.street}
                          <br />
                          {location.address.neighborhood} · {location.address.city}
                          <br />
                          <span className="font-normal text-stone">CEP {location.address.zip}</span>
                        </p>
                      </div>
                    ) : null}

                    <ul className="mt-5 space-y-2.5">
                      {location.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm text-espresso/85">
                          <span className="size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <Button
                        id={location.id === 'online' ? 'botao-consulta-varginha' : undefined}
                        href={location.cta.href}
                        variant="filled"
                        className="w-full"
                        icon={location.id === 'online' ? 'globe' : 'pin'}
                      >
                        {location.cta.label}
                      </Button>
                    </div>
                  </div>
                </article>
              </Rise>
            )
          })}
        </div>
      </div>
    </section>
  )
}
