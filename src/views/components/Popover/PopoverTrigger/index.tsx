import { PopoverTriggerProps } from '@radix-ui/react-popover';

import { Styled } from './styles';

export function PopoverTrigger({ children, ...props }: PopoverTriggerProps) {
  return (
    <Styled.RdxPopoverTrigger {...props}>{children}</Styled.RdxPopoverTrigger>
  );
}
