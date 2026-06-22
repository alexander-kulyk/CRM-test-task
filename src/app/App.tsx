//core
import type React from 'react';
//components
import { ErrorBoundary, ErrorMessage } from '../shared/ui';
//other
import { AppProviders } from './providers';
import { AppRouter } from './router';

const App: React.FC = () => (
  <AppProviders>
    <ErrorMessage />

    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </AppProviders>
);

export default App;
