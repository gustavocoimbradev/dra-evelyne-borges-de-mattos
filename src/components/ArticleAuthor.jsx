import { Link } from 'react-router-dom'
import { AUTHOR, authorPath } from '../data/author'
import FormationDialog from './FormationDialog'

export default function ArticleAuthor({ publishedLabel = 'Artigo educativo', variant = 'byline' }) {
  if (variant === 'end') {
    return (
      <aside
        className="mt-14 border border-clay/15 bg-white p-6 md:p-8"
        aria-labelledby="sobre-a-autora"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <Link to={authorPath()} rel="author" className="shrink-0">
            <img
              src={AUTHOR.image}
              alt={AUTHOR.name}
              width={112}
              height={140}
              className="aspect-[4/5] w-28 object-cover ring-1 ring-clay/20"
            />
          </Link>

          <div className="min-w-0 flex-1">
            <h2 id="sobre-a-autora" className="font-display text-2xl text-espresso md:text-3xl">
              <Link to={authorPath()} className="transition hover:text-clay" rel="author">
                {AUTHOR.name}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-stone">
              {AUTHOR.jobTitle} · {AUTHOR.credentials} · {AUTHOR.crm} · {AUTHOR.rqe}
            </p>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-stone">
              {AUTHOR.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={authorPath()}
                className="inline-flex items-center justify-center bg-espresso px-6 py-3.5 text-sm font-medium tracking-wide text-porcelain transition hover:bg-espresso-soft"
              >
                Ver perfil da autora
              </Link>
              <FormationDialog />
            </div>
          </div>
        </div>
      </aside>
    )
  }

  return (
    <aside
      className="mt-8 flex flex-wrap items-center gap-4 border-y border-clay/15 py-5"
      aria-label="Autora do artigo"
    >
      <Link
        to={authorPath()}
        className="group flex min-w-0 flex-1 items-center gap-4 sm:flex-none"
        rel="author"
      >
        <img
          src={AUTHOR.image}
          alt=""
          width={56}
          height={56}
          className="size-14 shrink-0 object-cover ring-1 ring-clay/20"
        />
        <div className="min-w-0">
          <p className="mt-0.5 truncate font-display text-lg text-espresso transition group-hover:text-clay">
            {AUTHOR.name}
          </p>
          <p className="text-sm text-stone">
            {AUTHOR.jobTitle} · {AUTHOR.credentials}
          </p>
        </div>
      </Link>
      <p className="w-full text-sm text-stone sm:ml-auto sm:w-auto sm:text-right">{publishedLabel}</p>
    </aside>
  )
}
