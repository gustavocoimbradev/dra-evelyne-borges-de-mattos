import { FORMATION, SOCIAL } from '../data/content'
import Button from './Button'
import Rise from './Reveal'

export default function About() {
  return (
    <section id="quemsoueu" className="bg-mist">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-20">
        <Rise className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            {/* Bloco de fundo offset */}
            <div
              className="absolute -right-3 -bottom-3 h-[92%] w-[92%] bg-clay/15 md:-right-5 md:-bottom-5"
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 -left-3 h-[40%] w-[40%] border border-clay/35 md:-top-4 md:-left-4"
              aria-hidden="true"
            />

            {/* Moldura da foto */}
            <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden">
              <img
                src="/assets/images/evelyne.webp"
                alt="Dra. Evelyne Borges de Mattos"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" />

              {/* Cantos gráficos */}
              <span className="absolute top-4 left-4 h-8 w-8 border-t border-l border-porcelain/80" aria-hidden="true" />
              <span className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-porcelain/80" aria-hidden="true" />

              {/* Faixa inferior */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
                <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-porcelain/90">
                  SBCP · AMB
                </p>
                <p className="font-display text-sm text-porcelain/90">Estética &amp; Reparadora</p>
              </div>
            </div>

            {/* Label vertical */}
            <p
              className="pointer-events-none absolute top-1/2 -right-2 hidden -translate-y-1/2 rotate-90 text-[10px] font-medium tracking-[0.35em] uppercase text-clay md:block lg:-right-3"
              aria-hidden="true"
            >
              Dra. Evelyne
            </p>

            {/* Arco decorativo */}
            <svg
              className="pointer-events-none absolute -top-6 -right-6 hidden size-28 text-clay/40 lg:block"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <path d="M90 90 A70 70 0 0 0 20 20" stroke="currentColor" strokeWidth="1" />
              <circle cx="20" cy="20" r="2.5" fill="currentColor" />
            </svg>
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
            <Button href={SOCIAL.lattes} variant="dark">
              Currículo Lattes
            </Button>
          </Rise>
        </div>
      </div>

      <div className="border-t border-espresso/10 bg-porcelain">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
          <Rise>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h3 className="font-display text-2xl tracking-[-0.02em] text-espresso md:text-3xl">Formação</h3>
              <p className="max-w-sm text-sm text-stone">Uma trajetória construída em instituições de referência.</p>
            </div>
          </Rise>

          <div className="mt-8 divide-y divide-espresso/10">
            {FORMATION.map((item, index) => (
              <Rise key={item.place} delay={(index % 4) + 1}>
                <div className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline md:gap-8">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-clay md:col-span-2">
                    {item.year}
                  </p>
                  <p className="font-display text-lg text-espresso md:col-span-4 md:text-xl">{item.place}</p>
                  <p className="text-sm text-stone md:col-span-6 md:text-base">{item.detail}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
