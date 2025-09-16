import styled from 'styled-components';

const Header = styled.header`
  background: ${({ theme }) => theme.colors.white};
  padding: 1.4rem 2rem;
  box-shadow: 0px 2px 8px 0px #00000033;
  margin-bottom: 4.4rem;

  @media (max-width: 680px) {
    padding-inline: 1rem;
  }
`;

const Main = styled.main`
  padding-inline: 3.2rem;

  @media (max-width: 680px) {
    padding-inline: 2rem;
  }
`;

export const Styled = {
  Header,
  Main,
};
