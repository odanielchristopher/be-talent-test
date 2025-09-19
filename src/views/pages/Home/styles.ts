import styled, { css } from 'styled-components';

const Container = styled.div`
  max-width: 96rem;
  margin-inline: auto;
`;

const Header = styled.header<{ $isMobile?: boolean }>`
  margin-bottom: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ $isMobile }) =>
    $isMobile &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 1.6rem;
    `}
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 2rem;
`;

const FiltersContainer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  ${({ $isMobile }) =>
    $isMobile &&
    css`
      width: 100%;
      flex-flow: row-reverse;
    `}
`;

const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Container,
  Header,
  Title,
  FiltersContainer,
  LoaderContainer,
};
