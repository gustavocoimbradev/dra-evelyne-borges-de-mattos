import { MARQUEE } from '../data/content'

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]

  return (
    <div className="overflow-hidden bg-clay py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-medium tracking-[0.22em] uppercase text-white"
          >
            {item}
            <span className="inline-block size-1.5 rounded-full bg-white/50" />
          </span>
        ))}
      </div>
    </div>
  )
}
