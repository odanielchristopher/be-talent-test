/* eslint-disable no-use-before-define */

import { memo } from 'react';

import { Employee } from '@app/entities/Employee';
import { useMediaQuery } from '@app/hooks/useMediaQuery';

import { DesktopList } from './Desktop';
import { MobileList } from './Mobile';

export interface IEmployeeListProps {
  employees: Employee[];
}

function EmployeeListComponent({ employees }: IEmployeeListProps) {
  const isMobile = useMediaQuery(780);

  return (
    <>
      {!isMobile && <DesktopList employees={employees} />}
      {isMobile && <MobileList employees={employees} />}
    </>
  );
}

export const EmployeeList = memo(EmployeeListComponent);
