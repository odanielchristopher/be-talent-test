import React from 'react';

import { useAccordionContext } from '../AccordionProvider';

import { Styled } from './styles';

export function AccordionContent({
  children,
}: {
  children: React.ReactElement;
}) {
  const { state } = useAccordionContext();

  return <Styled.Container data-state={state}>{children}</Styled.Container>;
}
