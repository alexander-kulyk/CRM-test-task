import type React from 'react';
import { useMemo } from 'react';
import type { EventInput } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import {
  Eyebrow,
  PageHeader,
  PageStack,
  SectionHeading,
} from '../../../../shared/components/Page';
import { CALENDAR_HEADER_TOOLBAR, CALENDAR_PLUGINS } from '../../constants';
import { useCalendarEvents } from '../../model';
import { mapEntityToEventInput } from '../../utils';
import { CalendarPageLoader } from '../CalendarPageLoader';
import * as S from './styled';

export const CalendarView: React.FC = () => {
  const events = useCalendarEvents();

  const calendarEvents = useMemo<EventInput[]>(
    () => (events ? events.map(mapEntityToEventInput) : []),
    [events],
  );

  if (!events) {
    return <CalendarPageLoader label='Loading events...' />;
  }

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
        </SectionHeading>

        <FullCalendar
          plugins={CALENDAR_PLUGINS}
          initialView='dayGridMonth'
          headerToolbar={CALENDAR_HEADER_TOOLBAR}
          events={calendarEvents}
          height='auto'
          nowIndicator
        />
      </S.CalendarPanel>
    </PageStack>
  );
};
