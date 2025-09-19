import React from 'react';

import { useAccordionContext } from '../AccordionProvider';

import { Styled } from './styles';

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  const { toogle, state } = useAccordionContext();

  return (
    <Styled.Button type="button" data-state={state} onClick={toogle}>
      {children}

      <Styled.ChevronIcon size={32} />
    </Styled.Button>
  );
}
