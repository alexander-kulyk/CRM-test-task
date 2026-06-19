import type React from 'react'
import {
  CalendarPageLoader,
  CalendarView,
  useInitDatabase,
} from '../../features/calendar'
import { ErrorBoundary } from '../../shared/components/ErrorBoundary'
import { ErrorMessage } from '../../shared/components/ErrorMessage'

export const CalendarPage: React.FC = () => {
  const { isInitializing } = useInitDatabase()

  if (isInitializing) {
    return <CalendarPageLoader />
  }

  return (
    <>
      <ErrorMessage />

      <ErrorBoundary>
        <CalendarView />
      </ErrorBoundary>
    </>
  )
}
