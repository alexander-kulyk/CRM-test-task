//core
import type React from 'react'
//other
import { EVENT_ANALYTICS_ROWS } from '../config'
import { EventAnalyticsRow } from './EventAnalyticsRow'
import * as S from './styled'

export const EventAnalyticsTable: React.FC = () => (
  <S.TableScroll>
    <S.Table>
      <thead>
        <tr>
          <S.Th>Event</S.Th>
          <S.Th>Date</S.Th>
          <S.Th>Registrations</S.Th>
          <S.Th>Attendees</S.Th>
          <S.Th>Status</S.Th>
        </tr>
      </thead>
      <tbody>
        {EVENT_ANALYTICS_ROWS.map((row) => (
          <EventAnalyticsRow key={row.id} row={row} />
        ))}
      </tbody>
    </S.Table>
  </S.TableScroll>
)
