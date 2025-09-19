import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { IEmployeesFilters } from '@app/types/IEmployeesFilters';

const options = [
  {
    value: 'front-end',
    label: 'Front-end',
  },
  {
    value: 'back-end',
    label: 'Back-end',
  },
  {
    value: 'designer',
    label: 'Designer',
  },
];

export function useFiltersModalController({
  value,
  visible,
}: {
  value: IEmployeesFilters;
  visible?: boolean;
}) {
  const [selectedJob, setSelectedJob] = useState<string | undefined>(value.job);
  const [fromDate, setFromDate] = useState<Date | undefined>(value.from);
  const [toDate, setToDate] = useState<Date | undefined>(value.to);

  useEffect(() => {
    if (visible) {
      setSelectedJob(value.job);
      setFromDate(value.from);
      setToDate(value.to);
    }
  }, [visible, value]);

  function handleSelectJob(job: string) {
    setSelectedJob((prevState) => (prevState !== job ? job : undefined));
  }

  function handleDateRange(range: DateRange) {
    setFromDate(range.from);

    setToDate(range.to);
  }

  return {
    toDate,
    options,
    fromDate,
    selectedJob,
    handleSelectJob,
    handleDateRange,
  };
}
