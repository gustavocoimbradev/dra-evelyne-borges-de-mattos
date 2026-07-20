import { Link } from 'react-router-dom'
import { WHATSAPP } from '../data/content'
import { categoryPath, proceduresForHome } from '../data/procedures'
import Button from './Button'
import Rise from './Reveal'

const PROCEDURES = proceduresForHome()

export default function Procedures() {
  return (
    <section id="procedimentos" className="bg-porcelain">
      <div className="container-site py-14 lg:py-16">
        <Rise>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" aria-hidden="true" />
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Procedimentos</p>
            </div>
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
            <Rise key={procedure.slug} delay={(index % 4) + 1}>
              <article className="border border-espresso/10 border-l-4 border-l-clay bg-white transition hover:border-clay/40 hover:shadow-[0_12px_40px_-20px_rgba(196,91,79,0.35)]">
                <div className="grid gap-6 p-5 md:grid-cols-[140px_1fr] md:items-start md:gap-8 md:p-7 lg:grid-cols-[160px_220px_1fr]">
                  <div className="flex items-center gap-4 md:block">
                    <Link to={categoryPath(procedure.slug)} className="relative size-24 shrink-0 overflow-hidden md:size-36 lg:size-40">
                      <img
                        src={procedure.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 ring-1 ring-inset ring-clay/20" />
                    </Link>
                    <span className="font-display text-3xl text-clay/40 md:mt-3 md:block md:text-4xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:pt-1">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-clay">
                      Categoria
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-espresso md:text-3xl">
                      <Link to={categoryPath(procedure.slug)} className="hover:text-clay">
                        {procedure.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-stone">
                      {procedure.items.length} procedimento{procedure.items.length > 1 ? 's' : ''}
                    </p>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-2.5">
                    {procedure.items.map((item) => (
                      <li
                        key={item.slug}
                        className="flex items-start gap-2.5 border-b border-clay/15 pb-2.5 text-sm leading-snug text-espresso/85"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 bg-clay" aria-hidden="true" />
                        <Link to={item.href} className="hover:text-clay">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Rise>
          ))}
        </div>

        <Rise className="mt-10 flex flex-col items-stretch gap-4 border-t-2 border-clay/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
