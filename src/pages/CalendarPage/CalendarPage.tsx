import type React from 'react'
import {
  CalendarPageLoader,
  CalendarView,
  useInitDatabase,
} from '../../features/calendar'
import * as S from './styled'

export const CalendarPage: React.FC = () => {
  const { isInitializing, error } = useInitDatabase()

  if (isInitializing) {
    return <CalendarPageLoader />
  }

  if (error) {
    return (
      <S.ErrorMessage>Failed to initialize calendar database.</S.ErrorMessage>
    )
  }

  return <CalendarView />
}
