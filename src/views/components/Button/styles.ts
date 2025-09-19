import { ComponentProps } from 'react';
import styled, { css } from 'styled-components';

const variants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
    box-shadow: ${({ theme }) => theme.shadow.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
      background: ${({ theme }) => theme.colors.primary.dark};
    }
  `,
  outline: css`
    background: ${({ theme }) => theme.colors.card.main};
    box-shadow: ${({ theme }) => theme.shadow.primary};
    border-color: ${({ theme }) => theme.colors.muted.light};
    color: ${({ theme }) => theme.colors.foreground};

    &:hover {
      background: ${({ theme }) => theme.colors.accent.light};
    }

    &:active {
      background: ${({ theme }) => theme.colors.accent.main};
    }
  `,
};

export interface IStyledButton extends ComponentProps<'button'> {
  $variant?: keyof typeof variants;
}

const Button = styled.button<IStyledButton>`
  align-items: center;
  border: 2px solid transparent;
  border-radius: 0.8rem;
  display: flex;
  font-size: 1.6rem;
  font-weight: 500;
  justify-content: center;
  height: 4.8rem;
  padding: 0 1.4rem;
  transition: all 0.2s ease-in;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  &:active {
    outline: none;
  }

  ${({ $variant = 'default' }) => variants[$variant]}

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[200]} !important;
    cursor: none !important;
  }
`;

export const Styled = {
  Button,
};
