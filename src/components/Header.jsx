import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NAV_ITEMS, WHATSAPP } from '../data/content'
import Button from './Button'
import { IconClose, IconMenu } from './Icons'

function sectionPath(href, isHome) {
  return isHome ? href : `/${href}`
}

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
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
          scrolled || !isHome
            ? 'bg-porcelain/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between md:h-20">
          <Link to="/" className="relative z-20" onClick={() => setOpen(false)}>
            <img
              src="/assets/images/logo.webp"
              alt="Dra. Evelyne Borges de Mattos"
              className="h-8 w-auto brightness-0 md:h-9"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-8" aria-label="Menu">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={sectionPath(item.href, isHome)}
                  className="text-[13px] font-medium tracking-[0.14em] uppercase text-stone transition hover:text-clay"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button href={WHATSAPP.online} variant="filled" icon="calendar" className="px-5 py-2.5 text-[13px]">
              Agendar consulta
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={sectionPath(item.href, isHome)}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-espresso transition hover:text-clay sm:text-5xl"
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={WHATSAPP.online}
            variant="filled"
            icon="calendar"
            className="mt-10"
            onClick={() => setOpen(false)}
          >
            Agendar consulta
          </Button>
        </nav>
      </div>
    </>
  )
}
