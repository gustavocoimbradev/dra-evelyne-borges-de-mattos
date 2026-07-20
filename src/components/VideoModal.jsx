import { useCallback, useEffect, useRef, useState } from 'react'
import { VIDEOS } from '../data/content'
import { IconClose } from './Icons'

function IconChevronUp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 15L12 9L18 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconChevronDown({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    <div
      className="lightbox fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Vídeos"
    >
      <button
        type="button"
        className="lightbox-backdrop absolute inset-0 bg-espresso/90 backdrop-blur-md"
        aria-label="Fechar"
        onClick={onClose}
      />

      <button
        type="button"
        className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-20 grid size-11 place-items-center rounded-full bg-porcelain/15 text-porcelain ring-1 ring-porcelain/25 backdrop-blur-sm transition hover:bg-clay hover:ring-clay"
        aria-label="Fechar"
        onClick={onClose}
      >
        <IconClose className="size-5" />
      </button>

      <div className="lightbox-panel relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div
              ref={scrollerRef}
              className="hide-scrollbar h-[min(78svh,640px)] w-[min(calc(100vw-2rem),360px)] overflow-y-auto overscroll-y-contain rounded-[1.5rem] bg-black shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-porcelain/15"
              style={{ scrollSnapType: 'y mandatory', WebkitOverflowScrolling: 'touch' }}
            >
              {VIDEOS.map((item, index) => (
                <div
                  key={item.id}
                  data-index={index}
                  ref={(node) => {
                    slideRefs.current[index] = node
                  }}
                  className="relative h-[min(78svh,640px)] w-full shrink-0 snap-start snap-always bg-black"
                >
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
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="h-full w-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-espresso/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-3 z-10 flex flex-col items-center justify-center gap-2.5 md:hidden">
              <button
                type="button"
                onClick={() => goTo(activeIndexRef.current - 1)}
                disabled={activeIndex === 0}
                className="pointer-events-auto grid size-10 place-items-center rounded-full bg-espresso/70 text-porcelain ring-1 ring-porcelain/20 backdrop-blur-sm transition hover:bg-clay disabled:pointer-events-none disabled:opacity-25"
                aria-label="Vídeo anterior"
              >
                <IconChevronUp className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndexRef.current + 1)}
                disabled={activeIndex === VIDEOS.length - 1}
                className="pointer-events-auto grid size-10 place-items-center rounded-full bg-espresso/70 text-porcelain ring-1 ring-porcelain/20 backdrop-blur-sm transition hover:bg-clay disabled:pointer-events-none disabled:opacity-25"
                aria-label="Próximo vídeo"
              >
                <IconChevronDown className="size-5" />
              </button>
            </div>
          </div>

          <div className="hidden shrink-0 flex-col gap-2.5 md:flex">
            <button
              type="button"
              onClick={() => goTo(activeIndexRef.current - 1)}
              disabled={activeIndex === 0}
              className="grid size-11 place-items-center rounded-full bg-porcelain/15 text-porcelain ring-1 ring-porcelain/25 backdrop-blur-sm transition hover:bg-clay hover:ring-clay disabled:pointer-events-none disabled:opacity-25"
              aria-label="Vídeo anterior"
            >
              <IconChevronUp className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndexRef.current + 1)}
              disabled={activeIndex === VIDEOS.length - 1}
              className="grid size-11 place-items-center rounded-full bg-porcelain/15 text-porcelain ring-1 ring-porcelain/25 backdrop-blur-sm transition hover:bg-clay hover:ring-clay disabled:pointer-events-none disabled:opacity-25"
              aria-label="Próximo vídeo"
            >
              <IconChevronDown className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
