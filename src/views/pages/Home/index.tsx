import { useEmployees } from '@app/hooks/useEmployees';
import { formatDate } from '@app/utils/formatDate';
import { formatPhone } from '@app/utils/formatPhone';

export function Home() {
  const { employees } = useEmployees();

  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Admissão</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((u) => (
          <tr key={u.id}>
            <td>
              <img src={u.image} alt={u.name} width={40} />
            </td>
            <td>{u.name}</td>
            <td>{u.job}</td>
            <td>{formatDate(u.admissionDate)}</td>
            <td>{formatPhone(u.phone)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
