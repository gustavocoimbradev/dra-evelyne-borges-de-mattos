import { useCallback, useEffect, useRef, useState } from 'react'
import { VIDEOS } from '../data/content'
import { IconClose } from './Icons'

function IconChevronUp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChevronDown({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function VideoModal({ video, onClose, onChange }) {
  const scrollerRef = useRef(null)
  const slideRefs = useRef([])
  const wheelLock = useRef(false)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const setIndex = useCallback(
    (index) => {
      if (index < 0 || index >= VIDEOS.length) return
      activeIndexRef.current = index
      setActiveIndex(index)
      onChange(VIDEOS[index])
    },
    [onChange],
  )

  const scrollToIndex = useCallback((index, behavior = 'smooth') => {
    const root = scrollerRef.current
    const slide = slideRefs.current[index]
    if (!root || !slide) return
    root.scrollTo({ top: slide.offsetTop, behavior })
  }, [])

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= VIDEOS.length) return
      setIndex(index)
      scrollToIndex(index)
    },
    [setIndex, scrollToIndex],
  )

  useEffect(() => {
    if (!video) return undefined

    const startIndex = Math.max(
      0,
      VIDEOS.findIndex((item) => item.id === video.id),
    )
    activeIndexRef.current = startIndex
    setActiveIndex(startIndex)

    const id = window.setTimeout(() => {
      scrollToIndex(startIndex, 'auto')
    }, 30)

    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(id)
      document.body.style.overflow = ''
    }
  }, [video?.id, scrollToIndex])

  useEffect(() => {
    if (!video) return undefined

    const root = scrollerRef.current
    if (!root) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return
        const index = Number(visible.target.dataset.index)
        if (Number.isNaN(index) || index === activeIndexRef.current) return
        setIndex(index)
      },
      { root, threshold: 0.6 },
    )

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide)
    })

    return () => observer.disconnect()
  }, [video, setIndex])

  useEffect(() => {
    if (!video) return undefined

    const root = scrollerRef.current
    if (!root) return undefined

    const onWheel = (event) => {
      event.preventDefault()
      if (wheelLock.current) return
      if (Math.abs(event.deltaY) < 10) return

      wheelLock.current = true
      const next = activeIndexRef.current + (event.deltaY > 0 ? 1 : -1)
      goTo(next)

      window.setTimeout(() => {
        wheelLock.current = false
      }, 600)
    }

    root.addEventListener('wheel', onWheel, { passive: false })
    return () => root.removeEventListener('wheel', onWheel)
  }, [video, goTo])

  useEffect(() => {
    if (!video) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowDown' || event.key === 'j') {
        event.preventDefault()
        goTo(activeIndexRef.current + 1)
      }
      if (event.key === 'ArrowUp' || event.key === 'k') {
        event.preventDefault()
        goTo(activeIndexRef.current - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [video, goTo, onClose])

  if (!video) return null

  return (
    <div className="lightbox fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Reels de vídeos">
      <button
        type="button"
        className="lightbox-backdrop absolute inset-0 bg-espresso/85 backdrop-blur-md"
        aria-label="Fechar"
        onClick={onClose}
      />

      <div className="lightbox-panel relative z-10 mx-auto flex h-full w-full max-w-[430px] flex-col px-2 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-4 sm:py-6">
        <div className="mb-2 flex shrink-0 items-center justify-between gap-3 sm:mb-3">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-rose/80">
            {String(activeIndex + 1).padStart(2, '0')} / {String(VIDEOS.length).padStart(2, '0')}
          </p>
          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-porcelain/20 bg-porcelain/10 text-porcelain transition hover:bg-porcelain/20"
            aria-label="Fechar"
            onClick={onClose}
          >
            <IconClose className="size-5" />
          </button>
        </div>

        <div className="relative mx-auto flex min-h-0 w-full max-w-[380px] flex-1">
          <div
            ref={scrollerRef}
            className="hide-scrollbar h-full w-full overflow-y-auto overscroll-y-contain rounded-[1.25rem] ring-1 ring-porcelain/15 sm:rounded-[1.5rem]"
            style={{ scrollSnapType: 'y mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {VIDEOS.map((item, index) => (
              <div
                key={item.id}
                data-index={index}
                ref={(node) => {
                  slideRefs.current[index] = node
                }}
                className="relative h-full w-full shrink-0 snap-start snap-always bg-black"
                style={{ minHeight: '100%' }}
              >
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
                  <span className="h-1 w-14 rounded-full bg-porcelain/25" />
                </div>

                {index === activeIndex ? (
                  <iframe
                    key={`${item.youtubeId}-play`}
                    title={item.title}
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <img src={item.thumbnail} alt="" className="h-full w-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-espresso/35" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex flex-col items-center justify-center gap-2 pr-2 sm:pr-0 sm:translate-x-[calc(100%+0.75rem)]">
            <button
              type="button"
              onClick={() => goTo(activeIndexRef.current - 1)}
              disabled={activeIndex === 0}
              className="pointer-events-auto grid size-11 place-items-center rounded-full border border-porcelain/15 bg-espresso/70 text-porcelain backdrop-blur-sm transition hover:bg-clay disabled:opacity-25"
              aria-label="Vídeo anterior"
            >
              <IconChevronUp className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndexRef.current + 1)}
              disabled={activeIndex === VIDEOS.length - 1}
              className="pointer-events-auto grid size-11 place-items-center rounded-full border border-porcelain/15 bg-espresso/70 text-porcelain backdrop-blur-sm transition hover:bg-clay disabled:opacity-25"
              aria-label="Próximo vídeo"
            >
              <IconChevronDown className="size-5" />
            </button>
          </div>
        </div>

        <p className="mt-2 hidden shrink-0 text-center text-[10px] tracking-[0.18em] uppercase text-porcelain/40 sm:block">
          Arraste ou role para cima / baixo
        </p>
      </div>
    </div>
  )
}
