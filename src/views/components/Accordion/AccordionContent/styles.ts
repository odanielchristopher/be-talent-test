import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.card.main};
  padding: 1.2rem 1.6rem;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;

  &[data-state='open'] {
    max-height: fit-content; /* valor grande o suficiente */
    opacity: 1;
  }

  &[data-state='close'] {
    max-height: 0;
    opacity: 0;
    padding: 0 1.6rem;
  }
`;

export const Styled = {
  Container,
};
