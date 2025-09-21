import { OctagonAlert } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.danger.main};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30rem;
  gap: 2.4rem;

  .information {
    strong {
      display: block;
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
  }
`;

const AlertIcon = styled(OctagonAlert)`
  width: 8.4rem;
  height: 8.4rem;
`;

export const Styled = {
  Container,
  AlertIcon,
};
