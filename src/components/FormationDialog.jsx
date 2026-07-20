import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FORMATION, SOCIAL } from '../data/content'
import Button from './Button'
import { IconAward, IconClose, IconDoctor, IconGraduation, IconHospital } from './Icons'

const FORMATION_ICONS = {
  hospital: IconHospital,
  doctor: IconDoctor,
  graduation: IconGraduation,
  award: IconAward,
}

export default function FormationDialog({ triggerVariant = 'outline', triggerClassName = '' }) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previous = document.activeElement
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [open])

  const dialog = open
    ? createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-espresso/75 backdrop-blur-[2px] transition"
            aria-label="Fechar formação"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[min(88svh,720px)] w-full max-w-xl flex-col overflow-hidden bg-porcelain text-espresso shadow-[0_24px_80px_-20px_rgba(42,33,30,0.55)] ring-1 ring-clay/15"
          >
            <div className="relative shrink-0 border-b border-clay/15 bg-white px-5 py-5 md:px-8 md:py-6">
              <div className="pr-12">
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">
                  Trajetória
                </p>
                <h2
                  id={titleId}
                  className="mt-1.5 font-display text-2xl tracking-[-0.02em] text-espresso md:text-3xl"
                >
                  Formação
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">
                  Uma trajetória construída em instituições de referência em medicina e cirurgia.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 grid size-10 place-items-center text-espresso transition hover:bg-clay/10 hover:text-clay md:top-5 md:right-5"
                aria-label="Fechar"
              >
                <IconClose className="size-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 md:px-8 md:py-7">
              <ol className="space-y-4">
                {FORMATION.map((item, index) => {
                  const Icon = FORMATION_ICONS[item.icon] || IconGraduation
                  const number = String(index + 1).padStart(2, '0')
                  return (
                    <li key={`${item.place}-${item.year}`} className="flex gap-3.5 sm:gap-4">
                      <div className="grid size-11 shrink-0 place-items-center bg-clay text-white sm:size-12 [&_svg]:size-5 [&_svg]:brightness-0 [&_svg]:invert">
                        <Icon />
                      </div>
                      <div className="min-w-0 flex-1 border border-clay/15 bg-white p-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="bg-clay px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-white">
                            {item.year}
                          </span>
                          <span className="font-display text-sm text-stone/45">{number}</span>
                        </div>
                        <h3 className="mt-2 font-display text-lg leading-snug text-espresso sm:text-xl">
                          {item.place}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-stone">{item.detail}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>

            <div className="shrink-0 border-t border-clay/15 bg-white px-5 py-4 md:px-8">
              <Button href={SOCIAL.lattes} variant="outline" icon="lattes" className="!w-full sm:!w-auto">
                Currículo Lattes
              </Button>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex w-full items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide transition duration-300 sm:w-auto ${
          triggerVariant === 'ghost'
            ? 'bg-transparent text-porcelain ring-1 ring-porcelain/50 hover:bg-porcelain/10'
            : 'bg-transparent text-espresso ring-1 ring-clay/35 hover:bg-clay/10'
        } ${triggerClassName}`}
      >
        <IconGraduation className="size-4 shrink-0" />
        <span>Ver formação</span>
      </button>

      {dialog}
    </>
  )
}
