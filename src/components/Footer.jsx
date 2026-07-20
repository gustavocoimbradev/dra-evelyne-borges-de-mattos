import { NAV_ITEMS, SOCIAL, WHATSAPP } from '../data/content'
import Button from './Button'
import { IconFacebook, IconInstagram } from './Icons'

export default function Footer() {
  return (
    <footer id="colophon" className="bg-espresso text-porcelain">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 border-b border-porcelain/10 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/assets/images/footer-logo.webp"
              alt="Dra. Evelyne Borges de Mattos"
              className="w-36 brightness-110"
            />
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight tracking-[-0.02em] text-porcelain md:text-3xl">
              Pronta para o próximo passo?
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button id="botao-consulta-online-rodape" href={WHATSAPP.online} variant="filled">
                Online
              </Button>
              <Button id="botao-consulta-presencial-rodape" href={WHATSAPP.presencial} variant="ghost">
                Presencial
              </Button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-porcelain/40">Navegação</p>
              <ul className="mt-5 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-porcelain/80 transition hover:text-porcelain">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div id="botao-facebook-instagram">
              <p className="text-[11px] tracking-[0.2em] uppercase text-porcelain/40">Social</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-porcelain/80 transition hover:text-porcelain"
                  >
                    <IconInstagram className="size-3.5" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-porcelain/80 transition hover:text-porcelain"
                  >
                    <IconFacebook className="size-3.5" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-porcelain/40">Registro</p>
              <p className="mt-5 text-sm leading-relaxed text-porcelain/70">
                CRM-MG 63.834
                <br />
                RQE 50.611
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-porcelain/45 md:flex-row md:items-center md:justify-between">
          <p>© Dra. Evelyne Borges de Mattos</p>
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
