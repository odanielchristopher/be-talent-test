import React from 'react';

import { AccordionProvider } from '../AccordionProvider';

import { Styled } from './styles';

export function AccordionRoot({ children }: { children: React.ReactNode }) {
  return (
    <AccordionProvider>
      <Styled.Container>{children}</Styled.Container>
    </AccordionProvider>
  );
}
