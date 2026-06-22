//core
import type React from 'react'
import dayjs from 'dayjs'
//other
import type { IEventAnalyticsRow } from '../config'
import * as S from './styled'

interface IEventAnalyticsRowProps {
  row: IEventAnalyticsRow
}

export const EventAnalyticsRow: React.FC<IEventAnalyticsRowProps> = ({ row }) => {
  const formattedDate = dayjs(row.date).format('MMM D, YYYY')

  return (
    <tr>
      <S.Td>{row.name}</S.Td>
      <S.Td>{formattedDate}</S.Td>
      <S.Numeric>{row.registrations}</S.Numeric>
      <S.Numeric>{row.attendees}</S.Numeric>
      <S.Td>
        <S.StatusBadge $status={row.status}>{row.status}</S.StatusBadge>
      </S.Td>
    </tr>
  )
}
