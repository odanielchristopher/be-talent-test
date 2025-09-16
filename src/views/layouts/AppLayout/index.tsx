import { Outlet } from 'react-router';

import { Logo } from '@views/components/Logo';

import { Styled } from './styles';

export function AppLayout() {
  return (
    <>
      <Styled.Header>
        <Logo />
      </Styled.Header>

      <Styled.Main>
        <Outlet />
      </Styled.Main>
    </>
  );
}
