import { createContext, useContext } from 'react';

export interface CtaContextValue {
  /** Открыть диалог выбора канала связи с подготовленным сообщением. */
  openCta: (message: string) => void;
}

export const CtaContext = createContext<CtaContextValue | null>(null);

export function useCta(): CtaContextValue {
  const value = useContext(CtaContext);

  if (!value) {
    throw new Error('useCta должен использоваться внутри Layout');
  }

  return value;
}
