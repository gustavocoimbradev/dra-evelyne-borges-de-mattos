import { useState } from 'react'
import { PROCEDURES, WHATSAPP } from '../data/content'
import Button from './Button'
import Rise from './Reveal'

export default function Procedures() {
  const [active, setActive] = useState(0)
  const current = PROCEDURES[active]

  return (
    <section id="procedimentos" className="bg-espresso text-porcelain">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
        <Rise>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-rose">Procedimentos</p>
              <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Cuidado preciso.
                <span className="block italic text-rose">Resultado natural.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-porcelain/65 lg:col-span-5 lg:justify-self-end">
              Do refinamento facial às cirurgias corporais e reparadoras — cada plano é individual.
            </p>
          </div>
        </Rise>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <Rise className="lg:col-span-4" delay={1}>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {PROCEDURES.map((procedure, index) => (
                <button
                  key={procedure.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`shrink-0 border-b px-4 py-3.5 text-left text-sm transition lg:w-full lg:px-0 ${
                    active === index
                      ? 'border-clay text-porcelain'
                      : 'border-porcelain/15 text-porcelain/45 hover:text-porcelain/80'
                  }`}
                >
                  <span className="mr-3 font-display text-porcelain/30">0{index + 1}</span>
                  {procedure.title}
                </button>
              ))}
            </div>
          </Rise>

          <Rise className="lg:col-span-8" delay={2} key={current.title}>
            <div className="grid items-start gap-6 md:grid-cols-2 md:items-center">
              <div className="relative mx-auto aspect-square max-h-[360px] w-full max-w-[360px] overflow-hidden md:mx-0">
                <img
                  src={current.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{current.title}</h3>
                <ul className="mt-5 space-y-3">
                  {current.items.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-porcelain/10 pb-3 text-sm text-porcelain/80">
                      <span className="mt-1.5 size-1.5 shrink-0 bg-clay" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Rise>
        </div>

        <Rise className="mt-10 flex flex-col gap-3 sm:flex-row" delay={3}>
          <Button href={WHATSAPP.online} variant="filled">
            Agendar consulta online
          </Button>
          <Button href={WHATSAPP.presencial} variant="ghost">
            Agendar consulta presencial
          </Button>
        </Rise>
      </div>
    </section>
  )
}
