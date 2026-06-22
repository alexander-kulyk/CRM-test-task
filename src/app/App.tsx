//core
import type React from 'react';
//components
import { ErrorBoundary } from '../shared/components';
//other
import { AppProviders } from './providers';
import { AppRouter } from './router';

const App: React.FC = () => (
  <AppProviders>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </AppProviders>
);

export default App;
