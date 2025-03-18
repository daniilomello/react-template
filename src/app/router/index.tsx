import { lazyLoad } from '@app/utils/lazyLoad';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const { Dashboard } = lazyLoad(() => import('@views/pages/Dashboard'));
const { Profile } = lazyLoad(() => import('@views/pages/Profile'));

export function Router() {
  return (
    <Suspense
      fallback={
        <div className="w-10 h-10 rounded-full border-4 border-r-white animate-spin"></div>
      }
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={routes.profile} element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
