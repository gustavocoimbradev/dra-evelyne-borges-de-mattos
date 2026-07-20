import { useCallback, useEffect, useState } from 'react'
import { SPACE } from '../data/content'
import Rise from './Reveal'
import { IconClose } from './Icons'
import PhotoCredit from './PhotoCredit'

const GRID_SPAN = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1 md:col-span-2',
]

function IconChevronLeft({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Lightbox({ photos, index, onClose, onChange, credit, creditUrl }) {
  const photo = photos[index]
  const total = photos.length

  const go = useCallback(
    (next) => {
      const wrapped = (next + total) % total
      onChange(wrapped)
    },
    [onChange, total],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') go(index - 1)
      if (event.key === 'ArrowRight') go(index + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, index, onClose])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-espresso/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria do consultório"
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-porcelain/55">
          {index + 1} / {total}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="grid size-10 place-items-center text-porcelain transition hover:text-rose"
          aria-label="Fechar"
        >
          <IconClose className="size-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-12 pb-8 md:px-20"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            go(index - 1)
          }}
          className="absolute left-2 z-10 grid size-11 place-items-center text-porcelain/70 transition hover:text-porcelain md:left-6"
          aria-label="Foto anterior"
        >
          <IconChevronLeft className="size-7" />
        </button>

        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-full max-w-full object-contain"
          onClick={(event) => event.stopPropagation()}
        />

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            go(index + 1)
          }}
          className="absolute right-2 z-10 grid size-11 place-items-center text-porcelain/70 transition hover:text-porcelain md:right-6"
          aria-label="Próxima foto"
        >
          <IconChevronRight className="size-7" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2 px-4 pb-6 md:px-8">
        <p className="text-center text-sm text-porcelain/55">{photo.alt}</p>
        <PhotoCredit credit={credit} creditUrl={creditUrl} tone="dark" />
      </div>
    </div>
  )
}

export default function Space() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <section id="espaco" className="bg-mist">
      <div className="container-site py-14 lg:py-16">
        <Rise>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-clay" aria-hidden="true" />
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">O espaço</p>
            </div>
            <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-espresso md:text-5xl">
              {SPACE.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">{SPACE.description}</p>
          </div>
        </Rise>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-2.5 sm:auto-rows-[180px] sm:gap-3 md:mt-12 md:auto-rows-[200px] md:grid-cols-4 md:gap-4 lg:auto-rows-[220px]">
          {SPACE.photos.map((photo, index) => (
            <Rise
              key={photo.src}
              delay={(index % 4) + 1}
              className={`h-full min-h-0 ${GRID_SPAN[index] ?? 'col-span-1 row-span-1'}`}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block h-full w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
                aria-label={`Ampliar: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-espresso/0 transition group-hover:bg-espresso/20" />
                <span className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-espresso/50 to-transparent p-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-porcelain">
                    Ver foto
                  </span>
                </span>
              </button>
            </Rise>
          ))}
        </div>

        <Rise delay={2} className="mt-6 flex flex-col gap-1 border-t border-clay/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone">{SPACE.addressLine}</p>
          <PhotoCredit credit={SPACE.credit} creditUrl={SPACE.creditUrl} />
        </Rise>
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          photos={SPACE.photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
          credit={SPACE.credit}
          creditUrl={SPACE.creditUrl}
        />
      ) : null}
    </section>
  )
}
