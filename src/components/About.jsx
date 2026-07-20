import FormationDialog from './FormationDialog'
import Rise from './Reveal'

export default function About() {
  return (
    <section id="quemsoueu" className="bg-white">
      <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
        <Rise className="relative z-0 lg:col-span-5 lg:pr-6">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className="absolute -right-3 -bottom-3 h-full w-full bg-clay/15 md:-right-4 md:-bottom-4"
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 -left-3 h-16 w-16 border-t-2 border-l-2 border-clay md:-top-4 md:-left-4"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden bg-porcelain">
              <img
                src="/assets/images/evelyne.webp"
                alt="Dra. Evelyne Borges de Mattos"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-espresso/55 to-transparent" />
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
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" aria-hidden="true" />
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Quem sou eu</p>
            </div>
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
          <Rise delay={2} className="mt-8 grid max-w-md grid-cols-2 gap-6 border-y-2 border-clay/20 py-6">
            <div>
              <p className="font-display text-3xl text-clay">63.834</p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-stone">CRM-MG</p>
            </div>
            <div>
              <p className="font-display text-3xl text-clay">50.611</p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-stone">RQE</p>
            </div>
          </Rise>
          <Rise delay={3} className="mt-8">
            <FormationDialog />
          </Rise>
        </div>
      </div>
    </section>
  )
}
