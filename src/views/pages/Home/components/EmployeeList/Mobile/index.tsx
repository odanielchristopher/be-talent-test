import { DotIcon } from 'lucide-react';

import { formatDate } from '@app/utils/formatDate';
import { formatPhone } from '@app/utils/formatPhone';
import { Accordion } from '@views/components/Accordion';

import { IEmployeeListProps } from '..';
import { CommonStyled } from '../styles';

import { Styled } from './styles';

export function MobileList({ employees }: IEmployeeListProps) {
  return (
    <Styled.Container>
      <Styled.Header>
        <div className="title">
          <span>Foto</span>

          <span>Nome</span>
        </div>

        <DotIcon size={36} />
      </Styled.Header>

      <div>
        {employees.map(({ id, name, image, job, phone, admissionDate }) => (
          <Accordion.Root key={id}>
            <Accordion.Trigger>
              <Styled.Trigger>
                <CommonStyled.Image src={image} alt={name} width={40} />

                <strong className="name">{name}</strong>
              </Styled.Trigger>
            </Accordion.Trigger>
            <Accordion.Content>
              <Styled.Content>
                <Styled.FieldContainer>
                  <span className="field">Cargo</span>

                  <strong className="value">{job}</strong>
                </Styled.FieldContainer>
                <Styled.FieldContainer>
                  <span className="field">Data de admissão</span>

                  <strong className="value">{formatDate(admissionDate)}</strong>
                </Styled.FieldContainer>
                <Styled.FieldContainer>
                  <span className="field">Telefone</span>

                  <strong className="value">{formatPhone(phone)}</strong>
                </Styled.FieldContainer>
              </Styled.Content>
            </Accordion.Content>
          </Accordion.Root>
        ))}
      </div>
    </Styled.Container>
  );
}
