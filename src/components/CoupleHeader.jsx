import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { IconClose, IconMenu } from './Icons'

const LP_NAV = [
  { label: 'O casal', href: '#casal-intro' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Consultório', href: '#consultorio' },
  { label: 'Dúvidas', href: '#faq' },
]

export default function CoupleHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-porcelain/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between md:h-20">
          <a href="#topo" className="relative z-20" onClick={() => setOpen(false)}>
            <span className="font-display text-lg tracking-[-0.02em] text-espresso md:text-xl">
              O Casal <span className="italic text-clay">da Plástica</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <nav className="flex items-center gap-6" aria-label="Menu da landing">
              {LP_NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[12px] font-medium tracking-[0.12em] uppercase text-stone transition hover:text-clay"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              href="#consultorio"
              target="_self"
              variant="filled"
              icon="calendar"
              className="px-5 py-2.5 text-[13px]"
            >
              Agendar
            </Button>
          </div>

          <button
            type="button"
            className="relative z-20 grid size-10 place-items-center text-espresso lg:hidden"
            aria-label={open ? 'Fechar' : 'Menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-porcelain transition-transform duration-500 lg:hidden ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8 pt-16">
          {LP_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-espresso transition hover:text-clay sm:text-5xl"
            >
              {item.label}
            </a>
          ))}
          <Button
            href="#consultorio"
            target="_self"
            variant="filled"
            icon="calendar"
            className="mt-10"
            onClick={() => setOpen(false)}
          >
            Agendar consulta
          </Button>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="mt-4 text-center text-sm tracking-[0.12em] uppercase text-stone transition hover:text-clay"
          >
            Voltar ao site
          </Link>
        </nav>
      </div>
    </>
  )
}
