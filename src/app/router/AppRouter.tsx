import type React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { CalendarPage, HomePage } from '../../pages';
import { AppLayout } from '../../shared/components';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='calendar' element={<CalendarPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
