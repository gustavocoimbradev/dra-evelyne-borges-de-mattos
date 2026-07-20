export const NAV_ITEMS = [
  { label: 'Início', href: '#topo' },
  { label: 'Sobre', href: '#quemsoueu' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Consulta', href: '#enderecos' },
]

export const WHATSAPP = {
  online:
    'https://api.whatsapp.com/send?phone=5535984463393&text=Ol%C3%A1.%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20online!',
  presencial:
    'https://api.whatsapp.com/send?phone=5535984463393&text=Ol%C3%A1.%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20presencial!',
}

export const SOCIAL = {
  facebook: 'https://www.facebook.com/draevelyne.plastica',
  instagram: 'https://www.instagram.com/draevelyneborgesdemattos/',
  lattes: 'http://lattes.cnpq.br/6116710948494978',
}

export const FORMATION = [
  {
    year: 'Residência',
    place: 'Hospital das Clínicas Samuel Libânio',
    detail: 'Residência médica em Cirurgia Plástica',
    icon: 'hospital',
  },
  {
    year: 'Residência',
    place: 'Santa Casa de Misericórdia de Juiz de Fora',
    detail: 'Residência médica em Cirurgia Geral',
    icon: 'doctor',
  },
  {
    year: 'Graduação',
    place: 'UFJF',
    detail: 'Medicina — Universidade Federal de Juiz de Fora',
    icon: 'graduation',
  },
  {
    year: 'Mestrado',
    place: 'UNIVÁS',
    detail: 'Ciências Aplicadas à Saúde — Universidade do Vale do Sapucaí',
    icon: 'award',
  },
  {
    year: 'Doutorado',
    place: 'UNIFESP',
    detail: 'Doutoranda — Universidade Federal de São Paulo',
    icon: 'graduation',
  },
]

export const PROCEDURES = [
  {
    title: 'Cirurgias Mamárias',
    image: '/assets/images/circle1.webp',
    items: [
      'Mamoplastia de aumento (prótese de mama)',
      'Mastopexia',
      'Redução de mamas',
      'Ginecomastia',
      'Explante (retirada de prótese)',
    ],
  },
  {
    title: 'Cirurgias Faciais',
    image: '/assets/images/circle2.webp',
    items: [
      'Blefaroplastia',
      'Otoplastia',
      'Lifting facial',
      'Elevação de supercílio',
      'Lipo de papada',
    ],
  },
  {
    title: 'Cirurgias Corporais',
    image: '/assets/images/circle3.webp',
    items: [
      'Abdominoplastia',
      'Lipoaspiração',
      'Lipoabdominoplastia',
      'Lipoescultura',
      'Braquioplastia (braços)',
      'Cruroplastia (coxas)',
      'Ninfoplastia',
    ],
  },
  {
    title: 'Minimamente Invasivos',
    image: '/assets/images/circle4.webp',
    items: [
      'Tratamentos para rugas e envelhecimento em geral',
      'Bioestimuladores de colágeno',
    ],
  },
  {
    title: 'Cirurgias Reparadoras',
    image: '/assets/images/circle5.webp',
    items: [
      'Ressecção de câncer de pele e reconstrução',
      'Queimaduras',
      'Correção de cicatriz',
      'Lobuloplastia (orelha rasgada)',
    ],
  },
]

export const VIDEOS = [
  {
    id: 'proposito',
    title: 'Meu propósito',
    thumbnail: '/assets/images/video1.webp',
    youtubeId: 'BpkcusV756w',
  },
  {
    id: 'protese',
    title: 'Prótese de mama',
    thumbnail: '/assets/images/video2.webp',
    youtubeId: 'MeOzMDuozog',
  },
  {
    id: 'medo',
    title: 'Medo de plástica',
    thumbnail: '/assets/images/video3.webp',
    youtubeId: 'JA2fuqyqYTM',
  },
  {
    id: 'faciais',
    title: 'Tratamentos faciais',
    thumbnail: '/assets/images/video4.webp',
    youtubeId: 'DhcMG5lDvaE',
  },
]

export const LOCATIONS = [
  {
    id: 'online',
    number: '01',
    title: 'Consulta online',
    subtitle: 'Atendimento completo à distância, com a mesma atenção da consulta presencial.',
    background: '/assets/images/bg-1.jpg',
    cta: { label: 'Agendar online', href: WHATSAPP.online },
  },
  {
    id: 'presencial',
    number: '02',
    title: 'Consulta presencial',
    subtitle: 'Av. Castelo Branco, 245 — Sala 205 — Vila Verde, Varginha — MG, 37012-005',
    background: '/assets/images/bg-2.webp',
    cta: { label: 'Agendar presencial', href: WHATSAPP.presencial },
  },
]

export const MARQUEE = [
  'Cirurgia Plástica',
  'SBCP',
  'Estética',
  'Reparadora',
  'Varginha',
  'Consulta Online',
  'Harmonia',
  'Segurança',
]
