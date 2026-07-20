import { Link } from 'react-router-dom'
import { COUPLE } from '../data/content'
import Rise from './Reveal'
import PhotoCredit from './PhotoCredit'

export default function Couple() {
  return (
    <section id="casal" className="bg-espresso text-porcelain">
      <div className="container-site py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Rise className="lg:col-span-6">
            <figure className="relative overflow-hidden">
              <img
                src={COUPLE.image}
                alt={COUPLE.imageAlt}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover object-[center_20%]"
              />
              <figcaption className="mt-3">
                <PhotoCredit
                  credit={COUPLE.credit}
                  creditUrl={COUPLE.creditUrl}
                  tone="dark"
                />
              </figcaption>
            </figure>
          </Rise>

          <div className="lg:col-span-6">
            <Rise>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-clay" aria-hidden="true" />
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-rose">
                  {COUPLE.eyebrow}
                </p>
              </div>
              <h2 className="mt-3 max-w-xl font-display text-3xl leading-[1.08] tracking-[-0.02em] text-porcelain md:text-4xl lg:text-[2.75rem]">
                {COUPLE.title}
              </h2>
            </Rise>

            <Rise delay={1} className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-porcelain/70">
              <p>{COUPLE.intro}</p>
              <p>{COUPLE.closing}</p>
            </Rise>

            <Rise delay={2} className="mt-8">
              <Link
                to={COUPLE.href}
                className="inline-flex w-full items-center justify-center gap-2.5 bg-porcelain px-6 py-3.5 text-sm font-medium tracking-wide text-espresso transition duration-300 hover:bg-rose sm:w-auto"
              >
                Conhecer o Casal da Plástica
              </Link>
            </Rise>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-porcelain/10 pt-10 md:mt-14 md:grid-cols-2 md:gap-10 lg:gap-14">
          {COUPLE.people.map((person, index) => (
            <Rise key={person.name} delay={index + 1}>
              <article>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-rose">
                  {person.role}
                </p>
                <h3 className="mt-2 font-display text-2xl text-porcelain md:text-3xl">{person.name}</h3>
                <p className="mt-1 text-sm text-rose">{person.origin}</p>
                <p className="mt-4 text-sm leading-relaxed text-porcelain/65 md:text-base">
                  {person.bio}
                </p>
              </article>
            </Rise>
          ))}
        </div>

        <Rise delay={2} className="mt-10 text-center md:text-left">
          <Link
            to={COUPLE.href}
            className="text-sm tracking-[0.12em] uppercase text-porcelain/55 transition hover:text-rose"
          >
            Ver página completa →
          </Link>
        </Rise>
      </div>
    </section>
  )
}
