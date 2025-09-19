import * as RdxPopover from '@radix-ui/react-popover';
import styled from 'styled-components';

const RdxPopoverTrigger = styled(RdxPopover.Trigger)`
  background: ${({ theme }) => theme.colors.card.light};
  border: 2px solid ${({ theme }) => theme.colors.muted.main};
  color: ${({ theme }) => theme.colors.foreground};
  height: 4.8rem;
  width: 100%;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  padding-left: 1.6rem;
  text-align: start;
`;

export const Styled = {
  RdxPopoverTrigger,
};
