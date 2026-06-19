import type React from 'react';
import { ErrorBoundary } from '../shared/components';
import { ErrorProvider } from '../shared/context';
import { AppProviders } from './providers';
import { AppRouter } from './router';

const App: React.FC = () => (
  <AppProviders>
    <ErrorProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </ErrorProvider>
  </AppProviders>
);

export default App;
