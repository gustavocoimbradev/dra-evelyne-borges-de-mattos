import { MARQUEE } from '../data/content'

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]

  return (
    <div className="overflow-hidden border-y border-espresso/10 bg-porcelain py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 text-sm tracking-[0.2em] uppercase text-espresso/60">
            {item}
            <span className="inline-block size-1.5 rounded-full bg-clay" />
          </span>
        ))}
      </div>
    </div>
  )
}
