import {
  IconCalendar,
  IconGlobe,
  IconInstagram,
  IconLattes,
  IconPin,
  IconWhatsapp,
} from './Icons'

const styles = {
  filled: 'bg-clay text-white hover:bg-clay-deep',
  ghost: 'bg-transparent text-porcelain ring-1 ring-porcelain/50 hover:bg-porcelain/10',
  dark: 'bg-espresso text-porcelain hover:bg-espresso-soft',
  soft: 'bg-porcelain text-espresso hover:bg-rose',
  line: 'bg-transparent text-espresso underline decoration-clay/50 underline-offset-8 hover:decoration-clay',
}

const ICONS = {
  globe: IconGlobe,
  pin: IconPin,
  calendar: IconCalendar,
  lattes: IconLattes,
  instagram: IconInstagram,
  whatsapp: IconWhatsapp,
}

export default function Button({
  href,
  children,
  icon,
  variant = 'filled',
  className = '',
  target = '_blank',
  id,
  onClick,
}) {
  const Icon = typeof icon === 'string' ? ICONS[icon] : null

  return (
    <a
      id={id}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`inline-flex w-full items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide transition duration-300 sm:w-auto ${styles[variant]} ${className}`}
    >
      {Icon ? <Icon className="size-4 shrink-0" /> : null}
      <span>{children}</span>
    </a>
  )
}
