import * as RdxPopover from '@radix-ui/react-popover';
import React from 'react';
import styled from 'styled-components';

type TypeCast = React.ComponentType<
  React.ComponentProps<typeof RdxPopover.Content>
>;

const RdxPopoverContent = styled(RdxPopover.Content as TypeCast)`
  background: ${({ theme }) => theme.colors.card.main};
  padding: 1rem;
  border-radius: 8px;

  ${({ theme }) => theme.shadow.primary}
`;

export const Styled = {
  RdxPopoverContent,
};
