import { env } from '@app/config/env';
import {
  EmployeeDataMapper,
  employeeDataMapper,
} from '@app/datamappers/employeeDataMapper';

import { HttpClient } from './utils/HttpClient';

class EmployeesService {
  constructor(private readonly httpClient: HttpClient) {}

  async getAll() {
    const data =
      await this.httpClient.get<EmployeeDataMapper.PersistenceData[]>(
        '/employees',
      );

    return data.map(employeeDataMapper.toDomain);
  }
}

export const employeesService = new EmployeesService(
  new HttpClient(env.apiUrl),
);
