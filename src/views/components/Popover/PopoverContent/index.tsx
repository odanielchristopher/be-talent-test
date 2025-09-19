import * as RdxPopover from '@radix-ui/react-popover';
import React from 'react';

import { Styled } from './styles';

export function PopoverContent({
  ...props
}: React.ComponentProps<typeof RdxPopover.Content>) {
  return (
    <RdxPopover.Portal>
      <Styled.RdxPopoverContent {...props} />
    </RdxPopover.Portal>
  );
}
