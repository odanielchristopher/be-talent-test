import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;

const Option = styled.button<{ $selected?: boolean }>`
  background: ${({ theme }) => theme.colors.muted.lighter};
  border: 2px solid transparent;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.foreground};
  padding: 0.8rem 1.4rem;
  text-align: start;
  transition: all ease-in-out 200ms;

  &:hover {
    background: ${({ theme }) => theme.colors.muted.light};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: ${({ theme }) => theme.colors.muted.main} !important;
    `}
`;

const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Styled = {
  Container,
  Section,
  Title,
  Option,
  Select,
};
