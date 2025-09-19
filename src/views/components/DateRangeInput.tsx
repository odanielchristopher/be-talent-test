import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { formatDateRange } from '@app/utils/formatDateRange';

import { Calendar } from './Calendar';
import { Popover } from './Popover';

interface IDateRangeInputProps {
  placeholder?: string;
  value?: DateRange;
  onChange?(dateRange: DateRange): void;
}

export function DateRangeInput({
  value,
  placeholder,
  onChange,
}: IDateRangeInputProps) {
  const [range, setRange] = useState(value ?? { from: undefined });

  function handleDateRange(newValue: DateRange | undefined) {
    setRange(newValue || { from: undefined });

    onChange?.(newValue || { from: undefined });
  }

  return (
    <Popover.Root modal={false}>
      <Popover.Trigger>
        <span>
          {formatDateRange({
            from: range?.from,
            to: range?.to,
          }) ||
            (placeholder ?? 'Escolha um período')}
        </span>
      </Popover.Trigger>

      <Popover.Content side="bottom">
        <Calendar mode="range" selected={range} onSelect={handleDateRange} />
      </Popover.Content>
    </Popover.Root>
  );
}
