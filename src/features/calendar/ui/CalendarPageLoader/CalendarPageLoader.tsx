import type React from 'react'
import * as S from './styled'

interface ICalendarPageLoaderProps {
  label?: string
}

export const CalendarPageLoader: React.FC<ICalendarPageLoaderProps> = ({
  label = 'Loading calendar...',
}) => {
  return (
    <S.LoaderOverlay role="status" aria-live="polite">
      <S.Spinner />
      <S.LoaderLabel>{label}</S.LoaderLabel>
    </S.LoaderOverlay>
  )
}
