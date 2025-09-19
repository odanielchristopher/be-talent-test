import { Styled } from './styles';

export function Spinner({ size = 24 }: { size?: number }) {
  return <Styled.Spinner $size={size} />;
}
