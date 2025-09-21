import { useCallback, useEffect, useState } from 'react';

import { Employee } from '@app/entities/Employee';
import { employeesService } from '@app/services/employeesService';
import { sleep } from '@app/utils/sleep';

interface IUseEmplyeesInput {
  enable?: boolean;
}

export function useEmployees({ enable }: IUseEmplyeesInput = { enable: true }) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadEmployees = useCallback(async () => {
    try {
      setHasError(false);
      setIsLoading(true);

      await sleep(2000);
      const employeeList = await employeesService.getAll();

      setEmployees(employeeList);
    } catch {
      setHasError(true);
      setEmployees([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (enable) loadEmployees();
  }, [loadEmployees, enable]);

  return {
    employees,
    isLoading,
    hasError,
    refetch: loadEmployees,
  };
}
