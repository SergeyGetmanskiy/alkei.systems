/**
 * Схема локализованного контента.
 * Набор ключей одинаков во всех языках — это гарантирует полноту переводов.
 */

export type LanguageCode = 'ru' | 'kz' | 'en';

export type ServiceId = 'mentor' | 'startup' | 'product';
export type CaseId = 'instroy' | 'twelveai';
export type ChannelId = 'telegram' | 'whatsapp' | 'email';
export type MethodologyId = 'sdf' | 'dpe' | 'odf';

export interface SeoContent {
  /** title страницы */
  title: string;
  /** meta description */
  description: string;
}

export interface NavItem {
  label: string;
  /** путь без языкового префикса, например 'mentor' */
  path: string;
}

export interface StepBlock {
  title: string;
  text: string;
}

export interface ChannelContent {
  label: string;
  /** отображаемое значение: @ник, номер, адрес почты */
  value: string;
  hint: string;
}

export interface CommonContent {
  siteName: string;
  descriptor: string;
  languageSwitcher: {
    label: string;
    current: string;
  };
  nav: {
    ariaLabel: string;
    home: NavItem;
    mentor: NavItem;
    startup: NavItem;
    product: NavItem;
    experience: NavItem;
    partners: NavItem;
    about: NavItem;
  };
  menu: {
    open: string;
    close: string;
    title: string;
  };
  coreCta: string;
  /** текст ссылки «перейти к содержанию» в начале страницы */
  skipToContent: string;
  readMore: string;
  contact: {
    title: string;
    lead: string;
    dialogTitle: string;
    dialogText: string;
    proposedMessage: string;
    copy: string;
    copied: string;
    open: string;
    close: string;
    channels: Record<ChannelId, ChannelContent>;
  };
  footer: {
    tagline: string;
    navTitle: string;
    servicesTitle: string;
    contactsTitle: string;
    privacy: string;
    rights: string;
    legal: string;
  };
  /** Заранее подготовленные сообщения для CTA (раздел 12 ТЗ) */
  ctaMessages: {
    default: string;
    mentor: string;
    startup: string;
    product: string;
    partners: string;
  };
  homeLink: string;
}

export interface HomeContent {
  meta: SeoContent;
  hero: {
    eyebrow: string;
    struckPhrase: string;
    finalPhrase: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    title: string;
    paragraphs: string[];
  };
  directions: {
    title: string;
    lead: string;
    items: Array<{
      id: ServiceId;
      tag: string;
      lead: string;
      text: string;
      link: string;
    }>;
  };
  method: {
    title: string;
    lead: string;
    steps: StepBlock[];
  };
  founder: {
    title: string;
    subtitle: string;
    photoAlt: string;
    paragraphs: string[];
    link: string;
  };
  projects: {
    title: string;
    lead: string;
    items: Array<{
      id: CaseId;
      name: string;
      summary: string;
      link: string;
    }>;
  };
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface MentorContent {
  meta: SeoContent;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  essence: {
    title: string;
    paragraphs: string[];
  };
  approach: {
    title: string;
    items: StepBlock[];
    note: string;
  };
  map: {
    title: string;
    lead: string;
    steps: StepBlock[];
  };
  topics: {
    title: string;
    items: string[];
  };
  outcomes: {
    title: string;
    items: string[];
    statement: string;
  };
  formats: {
    title: string;
    lead: string;
    items: Array<{
      name: string;
      price: string;
      description: string;
    }>;
    note: string;
  };
  boundaries: {
    title: string;
    items: string[];
  };
  combination: {
    title: string;
    text: string;
  };
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface StartupContent {
  meta: SeoContent;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  essence: {
    title: string;
    paragraphs: string[];
  };
  directions: {
    title: string;
    lead: string;
    items: StepBlock[];
    salesNote: string;
  };
  stages: {
    title: string;
    lead: string;
    items: Array<{
      title: string;
      items: string[];
    }>;
  };
  teamFormats: {
    title: string;
    items: StepBlock[];
    note: string;
  };
  principles: {
    title: string;
    items: StepBlock[];
  };
  model: {
    title: string;
    paragraphs: string[];
  };
  boundaries: {
    title: string;
    lead: string;
    items: string[];
  };
  combination: {
    title: string;
    text: string;
  };
  terms: {
    title: string;
    text: string;
    note: string;
  };
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface ProductContent {
  meta: SeoContent;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  position: {
    title: string;
    paragraphs: string[];
  };
  solutionTypes: {
    title: string;
    lead: string;
    items: string[];
  };
  process: {
    title: string;
    lead: string;
    steps: string[];
  };
  methodologies: {
    title: string;
    subtitle: string;
    items: Array<{
      id: MethodologyId;
      name: string;
      fullName: string;
      purpose: string;
      details: string[];
    }>;
    disclaimer: string;
  };
  marketResearch: {
    title: string;
    paragraphs: string[];
  };
  engineering: {
    title: string;
    lead: string;
    items: StepBlock[];
  };
  formats: {
    title: string;
    lead: string;
    items: StepBlock[];
  };
  commercialModel: {
    title: string;
    items: string[];
  };
  boundaries: {
    title: string;
    items: string[];
  };
  combination: {
    title: string;
    text: string;
  };
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface ExperienceContent {
  meta: SeoContent;
  hero: {
    title: string;
    subtitle: string;
  };
  founderBrief: {
    title: string;
    paragraphs: string[];
  };
  projects: {
    title: string;
    lead: string;
    items: Array<{
      id: CaseId;
      name: string;
      summary: string;
      role: string;
      link: string;
    }>;
  };
  competence: {
    title: string;
    lead: string;
    items: string[];
  };
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface CaseContent {
  meta: SeoContent;
  name: string;
  kind: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  status: {
    badge: string;
    text: string;
  };
  sectionsTitle: string;
  sections: Array<{
    id: 'context' | 'task' | 'role' | 'done' | 'result' | 'competencies';
    title: string;
    pending: string;
  }>;
  notice: string;
  backLink: string;
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface PartnersContent {
  meta: SeoContent;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  idea: {
    title: string;
    text: string;
  };
  blocks: {
    title: string;
    items: StepBlock[];
  };
  limits: {
    title: string;
    text: string;
  };
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface AboutContent {
  meta: SeoContent;
  hero: {
    title: string;
    subtitle: string;
  };
  what: {
    title: string;
    paragraphs: string[];
  };
  whyThree: {
    title: string;
    lead: string;
    items: StepBlock[];
  };
  approach: {
    title: string;
    paragraphs: string[];
  };
  founder: {
    title: string;
    subtitle: string;
    photoAlt: string;
    paragraphs: string[];
    link: string;
  };
  experience: {
    title: string;
    text: string;
    stats: Array<{ value: string; label: string }>;
  };
  philosophy: {
    title: string;
    lead: string;
    items: StepBlock[];
  };
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface PrivacyContent {
  meta: SeoContent;
  title: string;
  updated: string;
  intro: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    items?: string[];
  }>;
  contactTitle: string;
  contactText: string;
}

export interface NotFoundContent {
  meta: SeoContent;
  title: string;
  text: string;
  backHome: string;
}

export interface SiteContent {
  lang: LanguageCode;
  /** значение для og:locale, например ru_RU */
  locale: string;
  /** подпись языка в переключателе */
  languageLabel: string;
  common: CommonContent;
  home: HomeContent;
  mentor: MentorContent;
  startup: StartupContent;
  product: ProductContent;
  experience: ExperienceContent;
  cases: Record<CaseId, CaseContent>;
  partners: PartnersContent;
  about: AboutContent;
  privacy: PrivacyContent;
  notFound: NotFoundContent;
}




