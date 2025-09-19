import { ComponentProps } from 'react';

import { Styled } from './styles';

interface ISearchInputProps extends ComponentProps<'input'> {
  value?: string;
  onValueChange?(value: string): void;
  placeholder: string;
}

export default function SearchInput({
  value,
  onValueChange,
  placeholder,
}: ISearchInputProps) {
  return (
    <Styled.Container>
      <Styled.Input
        placeholder={placeholder}
        value={value}
        onChange={(event) => onValueChange?.(event.target.value)}
      />

      <Styled.Icon size={24} />
    </Styled.Container>
  );
}
