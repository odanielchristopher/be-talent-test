import { Employee } from '@app/entities/Employee';

class EmployeeDataMapper {
  toDomain(
    persistenceEmplyee: EmployeeDataMapper.PersistenceData,
  ): EmployeeDataMapper.DomainData {
    return {
      id: persistenceEmplyee.id,
      name: persistenceEmplyee.name,
      job: persistenceEmplyee.job,
      phone: persistenceEmplyee.phone,
      image: persistenceEmplyee.image,
      admissionDate: new Date(persistenceEmplyee.admission_date),
    };
  }
}

export namespace EmployeeDataMapper {
  export type PersistenceData = {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
  };

  export type DomainData = Employee;
}

export const employeeDataMapper = new EmployeeDataMapper();
