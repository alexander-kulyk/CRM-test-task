//core
import type React from 'react'
//components
import {
  CalendarPageLoader,
  CalendarView,
  useInitDatabase,
} from '../../../features/calendar'
import { ErrorBoundary, ErrorMessage } from '../../../shared/components'

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
