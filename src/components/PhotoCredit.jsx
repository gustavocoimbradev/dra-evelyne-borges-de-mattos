export default function PhotoCredit({
  credit = '@estudiomoniqueferreira',
  creditUrl = 'https://www.instagram.com/estudiomoniqueferreira/',
  className = '',
  tone = 'light',
}) {
  const linkClass =
    tone === 'dark'
      ? 'text-porcelain/65 transition hover:text-rose'
      : 'text-espresso/80 transition hover:text-clay'
  const textClass = tone === 'dark' ? 'text-porcelain/45' : 'text-stone/70'

  return (
    <p className={`text-xs tracking-[0.08em] ${textClass} ${className}`.trim()}>
      Fotografia:{' '}
      <a href={creditUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {credit}
      </a>
    </p>
  )
}
