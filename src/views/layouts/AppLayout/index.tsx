import { Outlet } from 'react-router';

import { Logo } from '@views/components/Logo';
import { ThemeSwitcher } from '@views/components/ThemeSwitcher';

import { Styled } from './styles';

export function AppLayout() {
  return (
    <>
      <Styled.Header>
        <div className="content">
          <Logo />

          <ThemeSwitcher />
        </div>
      </Styled.Header>

      <Styled.Main>
        <Outlet />
      </Styled.Main>
    </>
  );
}
