import type React from 'react'
import FullCalendar from '@fullcalendar/react'
import {
  Eyebrow,
  PageHeader,
  PageStack,
  SectionHeading,
  StatusPill,
} from '../../shared/components/Page'
import { CALENDAR_HEADER_TOOLBAR, CALENDAR_PLUGINS } from './constants'
import { useCalendarEvents } from './hooks'
import * as S from './styled'

export const CalendarPage: React.FC = () => {
  const { values, handlers } = useCalendarEvents()

  return (
    <PageStack>
      <PageHeader>
        <Eyebrow>Schedule</Eyebrow>
        <h1>Calendar</h1>
        <p>Planned client calls, demos, and CRM follow-ups.</p>
      </PageHeader>

      <S.CalendarPanel>
        <SectionHeading>
          <h2>Calendar View</h2>
          <StatusPill>
            {values.selectedDate
              ? `Selected: ${values.selectedDate}`
              : 'No date selected'}
          </StatusPill>
        </SectionHeading>

        <FullCalendar
          plugins={CALENDAR_PLUGINS}
          initialView="dayGridMonth"
          headerToolbar={CALENDAR_HEADER_TOOLBAR}
          events={values.events}
          dateClick={handlers.handleDateClick}
          height="auto"
          nowIndicator
          selectable
        />
      </S.CalendarPanel>
    </PageStack>
  )
}
