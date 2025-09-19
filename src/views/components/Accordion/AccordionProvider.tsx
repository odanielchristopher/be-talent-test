import React, { createContext, useCallback, useContext, useState } from 'react';

type AccordionContextValue = {
  state: 'open' | 'close';
  toogle(): void;
};

const AccordionContext = createContext({} as AccordionContextValue);

export function AccordionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AccordionContextValue['state']>('close');

  const toogle = useCallback(() => {
    setState((prevState) => (prevState === 'open' ? 'close' : 'open'));
  }, []);

  return (
    <AccordionContext.Provider
      value={{
        state,
        toogle,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (typeof context === 'undefined')
    throw new Error(`UseAccordionContext need used in Root component.`);

  return context;
}
