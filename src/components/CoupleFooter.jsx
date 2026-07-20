import { Link } from 'react-router-dom'
import Button from './Button'
import { COUPLE_PAGE, EVELYNE_CONTACT, ITALO } from '../data/couple'

export default function CoupleFooter() {
  const page = COUPLE_PAGE

  return (
    <footer className="bg-espresso text-porcelain">
      <div className="container-site py-12 lg:py-14">
        <div className="grid gap-10 border-b border-porcelain/10 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl tracking-[-0.02em] md:text-3xl">
              O Casal <span className="italic text-rose">da Plástica</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-porcelain/65">
              Dra. Evelyne Borges de Mattos e Dr. Ítalo Venturelli. Cirurgia Plástica em Varginha/MG.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={page.ctas.evelyne.href} variant="filled" icon="pin">
                Dra. Evelyne
              </Button>
              <Button href={page.ctas.italo.href} variant="ghost" icon="calendar">
                Dr. Ítalo
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-rose">Contato</p>
              <ul className="mt-4 space-y-3 text-sm text-porcelain/75">
                <li>
                  <span className="block text-porcelain/45">{EVELYNE_CONTACT.shortName}</span>
                  <a href={EVELYNE_CONTACT.phoneHref} className="transition hover:text-porcelain">
                    {EVELYNE_CONTACT.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-porcelain/45">{ITALO.shortName}</span>
                  <a href={ITALO.phoneHref} className="transition hover:text-porcelain">
                    {ITALO.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-rose">Consultório</p>
              <p className="mt-4 text-sm leading-relaxed text-porcelain/75">{page.address.full}</p>
              <Link
                to="/"
                className="mt-5 inline-block text-xs tracking-[0.14em] uppercase text-porcelain/50 transition hover:text-rose"
              >
                Site Dra. Evelyne →
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-porcelain/40 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© O Casal da Plástica</p>
            <p className="text-porcelain/35">
              CRM-MG 63.834 · RQE 50.611 · CRM/MG 63.355 · RQE 53.525
            </p>
          </div>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://www.gustavocoimbra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-porcelain/70 transition hover:text-porcelain"
            >
              Gustavo Coimbra
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
