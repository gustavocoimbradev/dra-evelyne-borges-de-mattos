import { LOCATIONS } from '../data/content'
import Button from './Button'
import Rise from './Reveal'

const online = LOCATIONS.find((item) => item.id === 'online')
const presencial = LOCATIONS.find((item) => item.id === 'presencial')

export default function Locations() {
  return (
    <section id="enderecos" className="bg-porcelain">
      <div className="container-site py-14 lg:py-16">
        <Rise>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Agendar</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-espresso md:text-5xl">
              Como prefere ser atendida?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
              Escolha a modalidade que faz mais sentido para você: online ou presencial em Varginha.
            </p>
          </div>
        </Rise>

        <div className="mt-12 grid items-stretch gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <Rise delay={1}>
            <article className="relative flex h-full flex-col overflow-hidden bg-white ring-1 ring-clay/20">
              <div className="relative h-48 overflow-hidden md:h-56">
                <img
                  src={online.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-center md:object-[58%_22%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
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

          <Rise delay={2}>
            <article className="relative flex h-full flex-col overflow-hidden bg-espresso text-porcelain">
              <div className="relative h-48 overflow-hidden md:h-56">
                <img
                  src={presencial.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/15" />
              </div>
              <div className="relative flex flex-1 flex-col p-6 text-center md:p-8 md:text-left">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-rose">
                  {presencial.tagline}
                </p>
                <h3 className="mt-2 font-display text-2xl text-porcelain md:text-3xl">
                  {presencial.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-porcelain/70 md:mx-0 md:text-base">
                  {presencial.description}
                </p>
                {presencial.address ? (
                  <div className="mt-6 border border-porcelain/10 border-l-2 border-l-clay bg-espresso-soft/80 px-4 py-3.5 text-center md:text-left">
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
                <ul className="mt-5 flex flex-col items-center space-y-2.5 md:items-start">
                  {presencial.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center justify-center gap-2.5 text-sm text-porcelain/85 md:justify-start"
                    >
                      <span className="size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Button href={presencial.cta.href} variant="soft" className="!w-full" icon="pin">
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
