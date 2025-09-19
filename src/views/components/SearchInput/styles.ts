import { SearchIcon } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  height: 4.8rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.card.main};
  border-radius: 0.8rem;
  border: 2px solid ${({ theme }) => theme.colors.muted.light};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1.6rem 1.6rem 1.4rem;

  outline: none;
  transition: all ease-in-out 200ms;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted.main};
  }
`;

const Icon = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.muted.main};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.6rem;
`;

export const Styled = {
  Container,
  Input,
  Icon,
};
