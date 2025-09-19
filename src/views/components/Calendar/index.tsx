import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';
import { DayPicker } from 'react-day-picker';

import { capitalizeFirstLetter } from '@app/utils/capitalizeFirstLetter';

import { Styled } from './styles';

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <Styled.Calendar
      locale={ptBR}
      showOutsideDays={showOutsideDays}
      classNames={{
        month_caption: 'stl-month-caption',
        day_button: 'stl-day-button',
        selected: 'stl-day-selected',
        range_middle: 'stl-range-middle',
      }}
      formatters={{
        formatCaption: (date, options) =>
          capitalizeFirstLetter(format(date, 'LLLL yyyy', options)),
      }}
      {...props}
    />
  );
}
