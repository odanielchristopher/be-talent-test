import { Route, Routes } from 'react-router';

import { lazyLoad } from '@app/utils/lazyLoad';

const { Home } = lazyLoad(() => import('@views/pages/Home'));

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
