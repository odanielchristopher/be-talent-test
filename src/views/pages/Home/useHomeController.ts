import { useDeferredValue, useMemo, useState } from 'react';

import { useEmployees } from '@app/hooks/useEmployees';
import { useMediaQuery } from '@app/hooks/useMediaQuery';
import { IEmployeesFilters } from '@app/types/IEmployeesFilters';
import { afterThanOrEqual } from '@app/utils/afterThanOrEqual';
import { beforeThanOrEqual } from '@app/utils/beforeThanOrEqual';
import { matchesJob } from '@app/utils/matchesJob';
import { matchesSearch } from '@app/utils/matchesSearch';

export function useHomeController() {
  const isMobile = useMediaQuery(468);
  const { employees, hasError, isLoading, refetch } = useEmployees();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<IEmployeesFilters>({});

  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  function handleSearchTerm(value: string) {
    setSearchTerm(value);
  }

  function handleChangeFilters<TFilter extends keyof IEmployeesFilters>(
    filter: TFilter,
  ) {
    return (value: IEmployeesFilters[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  function handleApplyFilters(newFilters: IEmployeesFilters) {
    handleChangeFilters('job')(newFilters.job);

    handleChangeFilters('from')(newFilters.from);
    handleChangeFilters('to')(newFilters.to);

    setIsFiltersModalOpen(false);
  }

  const filteredEmployees = useMemo(
    () =>
      employees.filter(
        (employee) =>
          matchesSearch(employee.name, deferredSearchTerm) &&
          matchesJob(employee.job, filters.job) &&
          afterThanOrEqual(employee.admissionDate, filters.from) &&
          beforeThanOrEqual(employee.admissionDate, filters.to),
      ),
    [employees, deferredSearchTerm, filters],
  );

  return {
    employees: filteredEmployees,
    isMobile,
    filters,
    hasError,
    isLoading,
    searchTerm,
    isFiltersModalOpen,
    handleSearchTerm,
    handleApplyFilters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    reloadEmployees: refetch,
  };
}
