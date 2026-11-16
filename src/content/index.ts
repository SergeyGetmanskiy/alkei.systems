import type { LanguageCode, SiteContent } from './types';
import { ru } from './ru';
import { kz } from './kz';
import { en } from './en';

export const contentByLanguage: Record<LanguageCode, SiteContent> = { ru, kz, en };

export type {
  SiteContent,
  LanguageCode,
  StepBlock,
  NavItem,
  CaseContent,
  ServiceId,
  CaseId,
  ChannelId,
  MethodologyId,
  SeoContent,
} from './types';
