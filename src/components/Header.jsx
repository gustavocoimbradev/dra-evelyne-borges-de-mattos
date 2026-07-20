import { useEffect, useState } from 'react'
import { NAV_ITEMS, WHATSAPP } from '../data/content'
import Button from './Button'
import { IconClose, IconMenu } from './Icons'

export default function Header() {
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
          scrolled ? 'border-b border-clay/15 bg-porcelain/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-8 lg:px-12">
          <a href="#topo" className="relative z-20" onClick={() => setOpen(false)}>
            <img
              src="/assets/images/logo.webp"
              alt="Dra. Evelyne Borges de Mattos"
              className="h-8 w-auto brightness-0 md:h-9"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-8" aria-label="Menu">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium tracking-[0.14em] uppercase text-stone transition hover:text-clay"
                >
                  {item.label}
                </a>
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
