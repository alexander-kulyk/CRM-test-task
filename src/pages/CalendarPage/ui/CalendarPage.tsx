//core
import type React from 'react'
//components
import {
  CalendarPageLoader,
  CalendarView,
  useInitDatabase,
} from '../../../features/calendar'
import { ErrorBoundary } from '../../../shared/ui'

export const CalendarPage: React.FC = () => {
  const { isInitializing } = useInitDatabase()

  if (isInitializing) {
    return <CalendarPageLoader />
  }

  return (
    <ErrorBoundary>
      <CalendarView />
    </ErrorBoundary>
  )
}
