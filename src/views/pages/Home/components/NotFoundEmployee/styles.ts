import { SearchIcon } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
  height: 30rem;
`;

const Message = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Icon = styled(SearchIcon)`
  color: ${({ theme }) => theme.colors.primary.light};
`;

export const Styled = {
  Container,
  Message,
  Icon,
};
