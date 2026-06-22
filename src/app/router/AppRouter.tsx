//core
import type React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
//components
import { AnalyticsPage, CalendarPage, UsersPage } from '../../pages';
import { AppLayout } from '../../shared/ui';

const basename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL;

export const AppRouter: React.FC = () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<CalendarPage />} />
        <Route path='analytics' element={<AnalyticsPage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
