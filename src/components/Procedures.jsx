import { PROCEDURES, WHATSAPP } from '../data/content'
import Button from './Button'
import Rise from './Reveal'

export default function Procedures() {
  return (
    <section id="procedimentos" className="bg-mist">
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
              <article className="border border-espresso/10 bg-porcelain transition hover:border-clay/30">
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

        <Rise className="mt-10 flex flex-col items-start gap-4 border-t border-espresso/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-stone">
            Quer saber qual procedimento combina com o seu objetivo? Agende uma avaliação.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={WHATSAPP.online} variant="filled" icon="globe">
              Consulta online
            </Button>
            <Button href={WHATSAPP.presencial} variant="dark" icon="pin">
              Consulta presencial
            </Button>
          </div>
        </Rise>
      </div>
    </section>
  )
}
