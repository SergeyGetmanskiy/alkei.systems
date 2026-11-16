/** Пути страниц без языкового префикса (раздел 3.1 ТЗ). */
export const PAGE_PATHS = {
  home: '',
  mentor: 'mentor',
  startup: 'startup',
  product: 'product',
  experience: 'experience',
  instroy: 'projects/instroy',
  twelveai: 'projects/twelveai',
  partners: 'partners',
  about: 'about',
  privacy: 'privacy',
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

/** Путь страницы услуги для конкретного направления. */
export const SERVICE_PATH = {
  mentor: PAGE_PATHS.mentor,
  startup: PAGE_PATHS.startup,
  product: PAGE_PATHS.product,
} as const;

/** Путь страницы отдельного проекта. */
export const CASE_PATH = {
  instroy: PAGE_PATHS.instroy,
  twelveai: PAGE_PATHS.twelveai,
} as const;
