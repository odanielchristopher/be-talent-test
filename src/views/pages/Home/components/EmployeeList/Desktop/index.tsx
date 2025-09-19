import { formatDate } from '@app/utils/formatDate';
import { formatPhone } from '@app/utils/formatPhone';
import { Table } from '@views/components/Table';

import { IEmployeeListProps } from '..';
import { CommonStyled } from '../styles';

export function DesktopList({ employees }: IEmployeeListProps) {
  return (
    <Table.Container>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCollumn>Foto</Table.HeaderCollumn>
          <Table.HeaderCollumn>Nome</Table.HeaderCollumn>
          <Table.HeaderCollumn>Cargo</Table.HeaderCollumn>
          <Table.HeaderCollumn>Admissão</Table.HeaderCollumn>
          <Table.HeaderCollumn>Telefone</Table.HeaderCollumn>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {employees.map((employee) => (
          <Table.Row key={employee.id}>
            <Table.Cell>
              <CommonStyled.Image
                src={employee.image}
                alt={employee.name}
                width={40}
              />
            </Table.Cell>
            <Table.Cell>{employee.name}</Table.Cell>
            <Table.Cell>{employee.job}</Table.Cell>
            <Table.Cell>{formatDate(employee.admissionDate)}</Table.Cell>
            <Table.Cell>{formatPhone(employee.phone)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Container>
  );
}
