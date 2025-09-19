import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

const Overlay = styled.div<{ $isLeaving: boolean }>`
  align-items: center;
  animation: ${fadeIn} 0.3s forwards;
  background: #22222299;
  backdrop-filter: blur(0.5rem);
  box-shadow: 0rem 0.4rem 1rem 0rem #0000000a;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${fadeOut} 0.2s forwards;
    `}
`;

const Container = styled.div<{ $isLeaving: boolean }>`
  animation: ${scaleIn} 0.3s forwards;
  background: ${({ theme }) => theme.colors.card.main};
  border-radius: 0.8rem;
  max-width: 45rem;
  padding: 2.4rem;
  width: 100%;

  > h1 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  .modal-body {
    margin-top: 3.2rem;
  }

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${scaleOut} 0.2s forwards;
    `}
`;

const Footer = styled.footer`
  align-items: center;
  margin-top: 3.2rem;
  display: flex;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.foreground};
    font-size: 1.6rem;
    margin-right: 2.4rem;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;

export const Styled = {
  Overlay,
  Container,
  Footer,
};
