import { useContent } from '../../i18n/LanguageContext';
import blocks from '../../styles/blocks.module.scss';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { CHANNEL_ORDER, buildChannelHref } from '../CtaDialog/channels';

export interface ContactBlockProps {
  /** подготовленное сообщение для выбранного канала */
  message: string;
  /** язык раздела для якорной навигации */
  id?: string;
  title?: string;
  lead?: string;
}

/** Контактный блок: прямые ссылки на Telegram, WhatsApp и email (раздел 12 ТЗ). */
export function ContactBlock({ message, id = 'contacts', title, lead }: ContactBlockProps) {
  const { common } = useContent();
  const { contact } = common;

  return (
    <section className={blocks.section} id={id}>
      <div className={blocks.sectionInner}>
        <SectionHeading title={title ?? contact.title} lead={lead ?? contact.lead} />

        <ul className={blocks.contactGrid}>
          {CHANNEL_ORDER.map((channelId, index) => {
            const channel = contact.channels[channelId];

            return (
              <Reveal as="li" key={channelId} delay={index * 60}>
                <a
                  className={blocks.contactCard}
                  href={buildChannelHref(channelId, message, contact.dialogTitle)}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className={blocks.contactLabel}>{channel.label}</span>
                  <span className={blocks.contactValue}>{channel.value}</span>
                  <span className={blocks.contactHint}>{channel.hint}</span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
