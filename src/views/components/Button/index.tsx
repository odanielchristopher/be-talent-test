import { ComponentProps } from 'react';

import { IStyledButton, Styled } from './styles';

export interface IButtonProps extends ComponentProps<'button'> {
  type: 'button' | 'submit' | 'reset';
}

export default function Button({
  type,
  disabled,
  children,
  onClick,
  ...props
}: IButtonProps & IStyledButton) {
  return (
    <Styled.Button type={type} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </Styled.Button>
  );
}
