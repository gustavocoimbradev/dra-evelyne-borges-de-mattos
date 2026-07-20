import { useEffect, useCallback } from 'react'
import { VIDEOS } from '../data/content'
import { IconClose } from './Icons'

function IconChevronLeft({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function VideoModal({ video, onClose, onChange }) {
  const index = video ? VIDEOS.findIndex((item) => item.id === video.id) : -1
  const hasPrev = index > 0
  const hasNext = index >= 0 && index < VIDEOS.length - 1

  const goPrev = useCallback(() => {
    if (hasPrev) onChange(VIDEOS[index - 1])
  }, [hasPrev, index, onChange])

  const goNext = useCallback(() => {
    if (hasNext) onChange(VIDEOS[index + 1])
  }, [hasNext, index, onChange])

  useEffect(() => {
    if (!video) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [video, onClose, goPrev, goNext])

  if (!video) return null

  return (
    <div
      className="lightbox fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button
        type="button"
        className="lightbox-backdrop absolute inset-0 bg-espresso/80 backdrop-blur-md"
        aria-label="Fechar vídeo"
        onClick={onClose}
      />

      <div className="lightbox-panel relative z-10 flex w-full max-w-[420px] flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-between gap-4 px-1">
          <div>
            <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-rose/80">
              Vídeo {String(index + 1).padStart(2, '0')} / {String(VIDEOS.length).padStart(2, '0')}
            </p>
            <h2 id="lightbox-title" className="mt-1 font-display text-xl text-porcelain sm:text-2xl">
              {video.title}
            </h2>
          </div>
          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-porcelain/20 bg-porcelain/10 text-porcelain transition hover:border-porcelain/40 hover:bg-porcelain/20"
            aria-label="Fechar"
            onClick={onClose}
          >
            <IconClose className="size-5" />
          </button>
        </div>

        <div className="relative w-full">
          {hasPrev ? (
            <button
              type="button"
              onClick={goPrev}
              className="absolute top-1/2 -left-2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-porcelain/15 bg-espresso/70 text-porcelain backdrop-blur-sm transition hover:bg-clay sm:-left-14 sm:size-11"
              aria-label="Vídeo anterior"
            >
              <IconChevronLeft className="size-5" />
            </button>
          ) : null}

          {hasNext ? (
            <button
              type="button"
              onClick={goNext}
              className="absolute top-1/2 -right-2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-porcelain/15 bg-espresso/70 text-porcelain backdrop-blur-sm transition hover:bg-clay sm:-right-14 sm:size-11"
              aria-label="Próximo vídeo"
            >
              <IconChevronRight className="size-5" />
            </button>
          ) : null}

          <div className="lightbox-frame relative overflow-hidden rounded-[1.75rem] bg-espresso shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)] ring-1 ring-porcelain/15">
            <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
              <span className="h-1 w-16 rounded-full bg-porcelain/25" />
            </div>

            <div className="aspect-[9/16] bg-black">
              <iframe
                key={video.youtubeId}
                title={video.title}
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent px-5 pt-16 pb-5">
              <a
                href={`https://youtube.com/shorts/${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xs font-medium tracking-[0.16em] uppercase text-porcelain/70 transition hover:text-rose"
              >
                Abrir no YouTube →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          {VIDEOS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.title}
              onClick={() => onChange(item)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-clay' : 'w-1.5 bg-porcelain/30 hover:bg-porcelain/55'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
