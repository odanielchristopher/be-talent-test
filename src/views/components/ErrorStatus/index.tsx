import Button from '../Button';

import { Styled } from './styles';

interface IErrorStatusProps {
  onTryAgain(): void;
}

export function ErrorStatus({ onTryAgain }: IErrorStatusProps) {
  return (
    <Styled.Container>
      <Styled.AlertIcon />

      <div className="information">
        <strong>Ocorreu um erro ao obter os seus funcionários!</strong>

        <Button type="button" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Styled.Container>
  );
}
