import { Route, Routes } from 'react-router';

import { lazyLoad } from '@app/utils/lazyLoad';

const { AppLayout } = lazyLoad(() => import('@views/layouts/AppLayout'));
const { Home } = lazyLoad(() => import('@views/pages/Home'));

export function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
