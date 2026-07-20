export const NAV_ITEMS = [
  { label: 'Início', href: '#topo' },
  { label: 'Sobre', href: '#quemsoueu' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Casal', href: '/casal-da-plastica/' },
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

/** Imagem stock genérica dos banners internos (categoria / procedimento). */
export const INTERNAL_BANNER_IMAGE = '/assets/images/banner-internal.jpg'

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
    detail: 'Medicina, Universidade Federal de Juiz de Fora',
    icon: 'graduation',
  },
  {
    year: 'Mestrado',
    place: 'UNIVÁS',
    detail: 'Ciências Aplicadas à Saúde, Universidade do Vale do Sapucaí',
    icon: 'award',
  },
  {
    year: 'Doutorado',
    place: 'UNIFESP',
    detail: 'Doutoranda, Universidade Federal de São Paulo',
    icon: 'graduation',
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
    title: 'Consulta online',
    tagline: 'De onde você estiver',
    description:
      'Avaliação completa por videochamada, com a mesma atenção e cuidado da consulta no consultório.',
    points: ['Horários flexíveis', 'Sem deslocamento', 'Consulta por videochamada'],
    cta: { label: 'Agendar consulta online', href: WHATSAPP.online },
    image: '/assets/images/bg-1.jpg',
  },
  {
    id: 'presencial',
    title: 'Consulta presencial',
    tagline: 'Consultório em Varginha',
    description: 'Atendimento presencial no consultório, com avaliação detalhada e acompanhamento próximo.',
    address: {
      street: 'Av. Castelo Branco, 245 — Salas 304 e 305',
      neighborhood: 'Vila Verde',
      city: 'Varginha, MG',
      zip: '37012-005',
    },
    points: ['Exame clínico presencial', 'Ambiente reservado', 'Acompanhamento próximo'],
    cta: { label: 'Agendar consulta presencial', href: WHATSAPP.presencial },
    image: '/assets/images/ambiente/ambiente-02.webp',
  },
]

export const COUPLE = {
  eyebrow: 'O Casal da Plástica',
  title: 'Redefina seu contorno corporal com o Casal da Plástica',
  image: '/assets/images/casal-plastica.webp',
  imageAlt: 'Dra. Evelyne Borges de Mattos e Dr. Ítalo Venturelli',
  intro:
    'Se conheceram e cursaram juntos a renomada Residência Médica de Cirurgia Plástica no Hospital das Clínicas Samuel Libânio, em Pouso Alegre.',
  closing:
    'São anos de experiência, estudo, conhecimento, congressos e cursos, aliados à conexão, sensibilidade e atenção em cada detalhe — em todos os atendimentos e cirurgias.',
  href: '/casal-da-plastica/',
  people: [
    {
      name: 'Dra. Evelyne Borges de Mattos',
      role: 'Cirurgiã Plástica',
      origin: 'Natural de Juiz de Fora',
      bio: 'Médica pela Universidade Federal de Juiz de Fora, residência em Cirurgia Geral na Santa Casa de Juiz de Fora, Mestra em Ciências da Saúde pela UNIVÁS e doutoranda pela UNIFESP.',
    },
    {
      name: 'Dr. Ítalo Venturelli',
      role: 'Cirurgião Plástico',
      origin: 'Natural de Varginha',
      bio: 'Médico pela Faculdade de Medicina de Juiz de Fora e Cirurgião Geral pela Santa Casa de Alfenas.',
    },
  ],
  credit: '@estudiomoniqueferreira',
  creditUrl: 'https://www.instagram.com/estudiomoniqueferreira/',
}

export const SPACE = {
  title: 'Consultório pensado para acolher',
  description:
    'Um ambiente moderno e reservado em Varginha, preparado para conversas tranquilas, avaliação cuidadosa e o cuidado que cada paciente merece.',
  addressLine: 'Av. Castelo Branco, 245 — Salas 304 e 305 · Vila Verde, Varginha — MG',
  credit: '@estudiomoniqueferreira',
  creditUrl: 'https://www.instagram.com/estudiomoniqueferreira/',
  photos: [
    {
      src: '/assets/images/ambiente/ambiente-06.webp',
      alt: 'Visão geral do consultório com mesa de atendimento e poltrona de avaliação',
      orientation: 'landscape',
    },
    {
      src: '/assets/images/ambiente/ambiente-01.webp',
      alt: 'Mesa de consulta em mármore com estante e iluminação integrada',
      orientation: 'landscape',
    },
    {
      src: '/assets/images/ambiente/ambiente-03.webp',
      alt: 'Sala de procedimentos com poltrona de avaliação e bancada clínica',
      orientation: 'portrait',
    },
    {
      src: '/assets/images/ambiente/ambiente-02.webp',
      alt: 'Área de atendimento com poltronas mostarda e painel de madeira',
      orientation: 'landscape',
    },
    {
      src: '/assets/images/ambiente/ambiente-07.webp',
      alt: 'Detalhe da mesa de consulta e estante com objetos decorativos',
      orientation: 'portrait',
    },
    {
      src: '/assets/images/ambiente/ambiente-05.webp',
      alt: 'Consultório com mesa de atendimento e área de procedimentos ao fundo',
      orientation: 'landscape',
    },
    {
      src: '/assets/images/ambiente/ambiente-09.webp',
      alt: 'Ambiente de consulta com mesa orgânica e parede em madeira',
      orientation: 'landscape',
    },
    {
      src: '/assets/images/ambiente/ambiente-04.webp',
      alt: 'Passagem entre a área de apoio e o consultório',
      orientation: 'landscape',
    },
    {
      src: '/assets/images/ambiente/ambiente-08.webp',
      alt: 'Área clínica com poltrona de avaliação e bancada de madeira',
      orientation: 'landscape',
    },
  ],
}

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
