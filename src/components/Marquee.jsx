import { MARQUEE } from '../data/content'

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]

  return (
    <div className="overflow-hidden bg-sand py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-medium tracking-[0.22em] uppercase text-espresso"
          >
            {item}
            <span className="inline-block size-1.5 rounded-full bg-clay/70" />
          </span>
        ))}
      </div>
    </div>
  )
}
