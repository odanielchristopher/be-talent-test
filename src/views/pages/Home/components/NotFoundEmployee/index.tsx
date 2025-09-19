import { Styled } from './styles';

interface INotFoundEmployeeProps {
  searchTerm: string;
}

export function NotFoundEmployee({ searchTerm }: INotFoundEmployeeProps) {
  const hasSearchTerm = searchTerm.length > 0;

  return (
    <Styled.Container>
      <Styled.Icon size={60} />

      <Styled.Message>
        Nenhum funcionário foi encontrado
        {hasSearchTerm && ` para ”${searchTerm}”`}.
      </Styled.Message>
    </Styled.Container>
  );
}
