import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  max-width: 96rem;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.8rem;
  overflow: hidden;

  ${({ theme }) => theme.shadow.secondary}
`;

export const Row = styled.tr``;

export const Header = styled.thead`
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
`;

export const Body = styled.tbody`
  background-color: ${({ theme }) => theme.colors.card.main};
`;

export const HeaderCollumn = styled.th`
  padding: 1.4rem 3.2rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const Cell = styled.td`
  padding: 0.8rem 3.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;

  border-bottom: 0.2rem solid rgba(204, 204, 204, 0.4);
`;

export const Table = {
  Container,
  Header,
  HeaderCollumn,
  Row,
  Body,
  Cell,
};
