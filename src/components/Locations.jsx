import { LOCATIONS } from '../data/content'
import Button from './Button'
import Rise from './Reveal'
import { IconGlobe, IconPin } from './Icons'

const online = LOCATIONS.find((item) => item.id === 'online')
const presencial = LOCATIONS.find((item) => item.id === 'presencial')

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

        <div className="mt-12 grid items-stretch gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {/* Online — leve, aberto, digital */}
          <Rise delay={1}>
            <article className="relative flex h-full flex-col overflow-hidden bg-porcelain ring-1 ring-espresso/10">
              <div
                className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-rose/40 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-10 -left-10 size-36 rounded-full bg-clay/10 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center bg-mist text-clay ring-1 ring-clay/20">
                    <IconGlobe className="size-5" />
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-clay/80">
                    Remoto
                  </p>
                </div>

                <p className="mt-8 text-[11px] font-medium tracking-[0.2em] uppercase text-clay">
                  {online.tagline}
                </p>
                <h3 className="mt-2 font-display text-2xl text-espresso md:text-3xl">{online.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-stone md:text-base">
                  {online.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {online.points.map((point) => (
                    <div
                      key={point}
                      className="border border-dashed border-espresso/15 bg-mist/70 px-3 py-3 text-center"
                    >
                      <p className="text-xs leading-snug font-medium text-espresso/85">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-mist p-3 ring-1 ring-espresso/10">
                  <div className="relative aspect-[5/4] overflow-hidden bg-porcelain">
                    <img
                      src={online.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover object-[58%_22%]"
                    />
                  </div>
                  <p className="mt-2.5 text-center text-[10px] font-medium tracking-[0.2em] uppercase text-espresso/55">
                    Videochamada · WhatsApp
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <Button
                    id="botao-consulta-varginha"
                    href={online.cta.href}
                    variant="filled"
                    className="!w-full"
                    icon="globe"
                  >
                    {online.cta.label}
                  </Button>
                </div>
              </div>
            </article>
          </Rise>

          {/* Presencial — escuro, ancorado no consultório */}
          <Rise delay={2}>
            <article className="relative flex h-full flex-col overflow-hidden bg-espresso text-porcelain">
              <div className="relative h-48 overflow-hidden md:h-56">
                <img
                  src={presencial.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/20" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <div className="grid size-12 place-items-center bg-clay text-white">
                    <IconPin className="size-5" />
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-porcelain/80">
                    No consultório
                  </p>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col border-t border-porcelain/10 p-6 md:p-8">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-rose">
                  {presencial.tagline}
                </p>
                <h3 className="mt-2 font-display text-2xl text-porcelain md:text-3xl">
                  {presencial.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-porcelain/70 md:text-base">
                  {presencial.description}
                </p>

                {presencial.address ? (
                  <div className="mt-6 border-l-2 border-clay bg-espresso-soft/80 px-4 py-3.5">
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-rose">
                      Endereço
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-porcelain">
                      {presencial.address.street}
                      <br />
                      {presencial.address.neighborhood} · {presencial.address.city}
                      <br />
                      <span className="font-normal text-porcelain/55">CEP {presencial.address.zip}</span>
                    </p>
                  </div>
                ) : null}

                <ul className="mt-5 space-y-2.5">
                  {presencial.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-porcelain/85">
                      <span className="size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Button
                    href={presencial.cta.href}
                    variant="soft"
                    className="!w-full"
                    icon="pin"
                  >
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
