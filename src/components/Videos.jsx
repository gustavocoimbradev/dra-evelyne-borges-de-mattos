import { SOCIAL, VIDEOS, WHATSAPP } from '../data/content'
import Button from './Button'
import Rise from './Reveal'
import { IconPlay } from './Icons'

export default function Videos({ onOpenVideo }) {
  return (
    <>
      <section id="videos" className="bg-mist">
        <div className="mx-auto max-w-[1400px] px-5 pt-14 pb-8 md:px-8 lg:px-12 lg:pt-16">
          <Rise>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Conteúdo</p>
                <h2 className="mt-2 font-display text-3xl tracking-[-0.02em] text-espresso md:text-4xl">
                  Em vídeo
                </h2>
              </div>
              <p className="max-w-xs text-sm text-stone">
                Respostas honestas sobre procedimentos, expectativas e o meu trabalho.
              </p>
            </div>
          </Rise>
        </div>

        <div className="hide-scrollbar mx-auto flex max-w-[1400px] snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:gap-5 md:px-8 lg:px-12">
          {VIDEOS.map((video, index) => (
            <Rise
              key={video.id}
              delay={(index % 4) + 1}
              className="w-[70vw] max-w-[280px] shrink-0 snap-center sm:w-[42vw] lg:w-[22%]"
            >
              <button
                type="button"
                onClick={() => onOpenVideo(video)}
                className="group relative block w-full overflow-hidden text-left"
                aria-label={`Assistir: ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/4] max-h-[380px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
                <span className="absolute left-4 top-4 grid size-10 place-items-center bg-porcelain/90 text-espresso transition group-hover:bg-clay group-hover:text-white">
                  <IconPlay className="size-4 translate-x-px" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="font-display text-xl text-porcelain md:text-2xl">{video.title}</span>
                </span>
              </button>
            </Rise>
          ))}
        </div>

        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-8 sm:flex-row md:px-8 lg:px-12">
          <Button href={WHATSAPP.online} variant="dark" icon="globe">
            Consulta online
          </Button>
          <Button href={WHATSAPP.presencial} variant="soft" className="ring-1 ring-espresso/10" icon="pin">
            Consulta presencial
          </Button>
        </div>
      </section>

      <section id="posts" className="bg-clay">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-5 py-10 text-center md:flex-row md:items-center md:justify-between md:px-8 md:text-left lg:px-12">
          <Rise>
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Bastidores no Instagram
            </h2>
            <p className="mt-1 text-sm text-white/75">@draevelyneborgesdemattos</p>
          </Rise>
          <Rise delay={2} className="w-full md:w-auto">
            <Button
              href={SOCIAL.instagram}
              variant="soft"
              id="botao-instagram"
              icon="instagram"
              className="!w-full md:!w-auto"
            >
              Seguir no Instagram
            </Button>
          </Rise>
        </div>
      </section>
    </>
  )
}
