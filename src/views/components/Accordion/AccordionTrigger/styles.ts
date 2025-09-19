import { ChevronDownIcon } from 'lucide-react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.card.main};
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 1.6rem;

  &[data-state='open'] {
    svg {
      transform: rotate(-180deg);
    }
  }

  &[data-state='close'] {
    svg {
      transform: rotate(0deg);
    }
  }
`;

const ChevronIcon = styled(ChevronDownIcon)`
  color: ${({ theme }) => theme.colors.primary.main};
  transition: transform 0.3s ease;
`;

export const Styled = {
  Button,
  ChevronIcon,
};
