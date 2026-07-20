import { FORMATION, SOCIAL } from '../data/content'
import Button from './Button'
import Rise from './Reveal'
import { IconAward, IconDoctor, IconGraduation, IconHospital } from './Icons'

const FORMATION_ICONS = {
  hospital: IconHospital,
  doctor: IconDoctor,
  graduation: IconGraduation,
  award: IconAward,
}

export default function About() {
  return (
    <section id="quemsoueu" className="bg-mist">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-20">
        <Rise className="relative z-0 lg:col-span-5 lg:pr-6">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            {/* Acento discreto atrás da foto */}
            <div
              className="absolute -right-2 -bottom-2 h-full w-full border border-clay/20 md:-right-3 md:-bottom-3"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden bg-porcelain">
              <img
                src="/assets/images/evelyne.webp"
                alt="Dra. Evelyne Borges de Mattos"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
                <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-porcelain">
                  SBCP · AMB
                </p>
                <p className="font-display text-sm text-porcelain">Estética &amp; Reparadora</p>
              </div>
            </div>
          </div>
        </Rise>

        <div className="flex flex-col justify-center lg:col-span-7 lg:pl-4">
          <Rise>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Quem sou eu</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-[1.05] tracking-[-0.02em] text-espresso md:text-4xl lg:text-5xl">
              Especialista em remodelar confiança
            </h2>
          </Rise>

          <Rise delay={1} className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-stone">
            <p>
              Cirurgiã Plástica especialista pela Sociedade Brasileira de Cirurgia Plástica (SBCP) e
              Associação Médica Brasileira (AMB).
            </p>
            <p>Atuação em Cirurgia Plástica estética e reparadora.</p>
          </Rise>

          <Rise delay={2} className="mt-8 grid max-w-md grid-cols-2 gap-6 border-y border-espresso/10 py-5">
            <div>
              <p className="font-display text-2xl text-espresso">63.834</p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-stone">CRM-MG</p>
            </div>
            <div>
              <p className="font-display text-2xl text-espresso">50.611</p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-stone">RQE</p>
            </div>
          </Rise>

          <Rise delay={3} className="mt-8">
            <Button href={SOCIAL.lattes} variant="dark" icon="lattes">
              Currículo Lattes
            </Button>
          </Rise>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-espresso/10 bg-espresso">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full border border-clay/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-clay/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
          <Rise>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-rose">Trajetória</p>
                <h3 className="mt-2 font-display text-3xl tracking-[-0.02em] text-porcelain md:text-4xl">
                  Formação
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-porcelain/65">
                Uma trajetória construída em instituições de referência em medicina e cirurgia.
              </p>
            </div>
          </Rise>

          <ol className="relative mt-12 md:mt-14">
            <span
              className="absolute top-6 bottom-6 left-[1.4rem] w-px bg-gradient-to-b from-clay via-clay/50 to-porcelain/10 md:left-[1.65rem]"
              aria-hidden="true"
            />

            {FORMATION.map((item, index) => {
              const Icon = FORMATION_ICONS[item.icon] || IconGraduation
              const number = String(index + 1).padStart(2, '0')

              return (
                <Rise key={`${item.place}-${item.year}`} delay={(index % 4) + 1}>
                  <li className="relative grid gap-4 py-5 md:grid-cols-[auto_1fr] md:gap-8 md:py-6">
                    <div className="relative z-10 flex items-start gap-4 md:gap-5">
                      <div className="grid size-12 shrink-0 place-items-center bg-clay text-porcelain ring-[6px] ring-espresso md:size-14 [&_svg]:size-6 [&_svg]:brightness-0 [&_svg]:invert">
                        <Icon />
                      </div>
                      <span className="pt-2 font-display text-2xl text-porcelain/25 md:hidden">{number}</span>
                    </div>

                    <div className="border border-porcelain/10 bg-white/[0.04] p-5 md:flex md:items-start md:gap-8 md:p-6">
                      <span className="hidden shrink-0 font-display text-4xl leading-none text-porcelain/20 md:block">
                        {number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <span className="inline-flex bg-clay/25 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-rose">
                          {item.year}
                        </span>
                        <h4 className="mt-3 font-display text-xl leading-snug text-porcelain md:text-2xl">
                          {item.place}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-porcelain/75 md:text-base">{item.detail}</p>
                      </div>
                    </div>
                  </li>
                </Rise>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
