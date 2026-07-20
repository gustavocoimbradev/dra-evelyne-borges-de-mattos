import { INTERNAL_BANNER_IMAGE } from '../data/content'

export default function InternalBanner({
  image = INTERNAL_BANNER_IMAGE,
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-espresso">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/50" />

      <div className="container-site relative z-10 flex min-h-[11rem] flex-col justify-end py-8 md:min-h-[14rem] md:py-10 lg:min-h-[16rem]">
        {eyebrow ? (
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-rose">{eyebrow}</p>
        ) : null}

        <h1 className="mt-2 max-w-3xl font-display text-3xl tracking-[-0.02em] text-porcelain md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-porcelain/75 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
