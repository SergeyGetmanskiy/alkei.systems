import blocks from '../../styles/blocks.module.scss';
import { Button } from '../Button/Button';
import { useCta } from '../CtaDialog/CtaContext';

export interface FinalCtaProps {
  title: string;
  text: string;
  button: string;
  /** подготовленное сообщение для выбранного канала */
  message: string;
}

/** Финальный призыв к действию: открывает выбор канала связи. */
export function FinalCta({ title, text, button, message }: FinalCtaProps) {
  const { openCta } = useCta();

  return (
    <section className={blocks.ctaSection}>
      <div className={blocks.ctaBox}>
        <h2 className={blocks.ctaTitle}>{title}</h2>
        <p className={blocks.ctaText}>{text}</p>
        <div className={blocks.ctaActions}>
          <Button variant="primary" size="lg" onClick={() => openCta(message)}>
            {button}
          </Button>
        </div>
      </div>
    </section>
  );
}
