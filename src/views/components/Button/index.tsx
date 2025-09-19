import { ComponentProps } from 'react';

import { IStyledButton, Styled } from './styles';

export interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  type: 'button' | 'submit' | 'reset';
}

export default function Button({
  type,
  disabled,
  isLoading,
  children,
  onClick,
  ...props
}: IButtonProps & IStyledButton) {
  return (
    <Styled.Button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {!isLoading && children}
      {/* {isLoading && <Spinner size={16} />} */}
    </Styled.Button>
  );
}
