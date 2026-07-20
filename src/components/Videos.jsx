import { SOCIAL, VIDEOS, WHATSAPP } from '../data/content'
import Button from './Button'
import Rise from './Reveal'
import { IconPlay } from './Icons'

export default function Videos({ onOpenVideo }) {
  return (
    <>
      <section id="videos" className="bg-white">
        <div className="container-site pt-14 pb-8 lg:pt-16">
          <Rise>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-clay" aria-hidden="true" />
                  <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Conteúdo</p>
                </div>
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

        <div className="container-site hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 md:gap-5">
          {VIDEOS.map((video, index) => (
            <Rise
              key={video.id}
              delay={(index % 4) + 1}
              className="w-[70vw] max-w-[280px] shrink-0 snap-center sm:w-[42vw] lg:w-[22%]"
            >
              <button
                type="button"
                onClick={() => onOpenVideo(video)}
                className="group relative block w-full overflow-hidden text-left ring-1 ring-clay/20 transition hover:ring-clay/50"
                aria-label={`Assistir: ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/4] max-h-[380px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent" />
                <span className="absolute left-4 top-4 grid size-10 place-items-center bg-espresso text-porcelain transition group-hover:bg-clay-deep">
                  <IconPlay className="size-4 translate-x-px" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="font-display text-xl text-porcelain md:text-2xl">{video.title}</span>
                </span>
              </button>
            </Rise>
          ))}
        </div>

        <div className="container-site flex flex-col gap-3 py-8 sm:flex-row">
          <Button href={WHATSAPP.online} variant="filled" icon="globe">
            Consulta online
          </Button>
          <Button href={WHATSAPP.presencial} variant="outline" icon="pin">
            Consulta presencial
          </Button>
        </div>
      </section>

      <section id="posts" className="bg-sand">
        <div className="container-site flex flex-col items-center gap-6 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <Rise>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-clay">Instagram</p>
            <h2 className="mt-2 font-display text-2xl text-espresso md:text-3xl">Bastidores no Instagram</h2>
            <p className="mt-1 text-sm text-stone">@draevelyneborgesdemattos</p>
          </Rise>
          <Rise delay={2} className="w-full md:w-auto">
            <Button
              href={SOCIAL.instagram}
              variant="dark"
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
