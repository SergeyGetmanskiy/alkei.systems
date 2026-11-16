import { CONTACT } from '../../config/site';
import type { ChannelId } from '../../content/types';

/**
 * Прямые ссылки на каналы связи.
 * WhatsApp и email поддерживают предзаполненное сообщение;
 * в Telegram персональный чат не принимает текст в ссылке,
 * поэтому подготовленное сообщение предлагается скопировать.
 */
export function buildChannelHref(channel: ChannelId, message: string, subject: string): string {
  switch (channel) {
    case 'whatsapp':
      return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    case 'email':
      return `${CONTACT.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    case 'telegram':
    default:
      return CONTACT.telegram;
  }
}

export const CHANNEL_ORDER: ChannelId[] = ['telegram', 'whatsapp', 'email'];
