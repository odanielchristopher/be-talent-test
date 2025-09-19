import * as PrimitePopover from '@radix-ui/react-popover';
import React from 'react';

import { Styled } from './styles';

export function PopoverRoot({
  children,
  ...props
}: React.ComponentProps<typeof PrimitePopover.Root>) {
  return <Styled.RdxPopoverRoot {...props}>{children}</Styled.RdxPopoverRoot>;
}
