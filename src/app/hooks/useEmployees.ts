import { useEffect, useState } from 'react';

import { Employee } from '@app/entities/Employee';
import { employeesService } from '@app/services/employeesService';
import { sleep } from '@app/utils/sleep';

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadEmployees() {
      setIsLoading(true);

      await sleep(2000);
      const data = await employeesService.getAll();

      setIsLoading(false);
      setEmployees(data);
    }

    loadEmployees();
  }, []);

  return {
    employees,
    isLoading,
  };
}
