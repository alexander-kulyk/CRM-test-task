import { useState, type FC } from 'react';
import type { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {
  type DateClickArg,
} from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import styled from 'styled-components';
import {
  Eyebrow,
  PageHeader,
  PageStack,
  Panel,
  SectionHeading,
  StatusPill,
} from '../shared/components/Page';
import type { CrmCalendarEvent } from '../shared/types/calendar';

const CalendarPanel = styled(Panel)`
  overflow-x: auto;

  .fc {
    --fc-border-color: ${({ theme }) => theme.colors.gridLine};
    --fc-button-bg-color: ${({ theme }) => theme.colors.surface};
    --fc-button-border-color: ${({ theme }) => theme.colors.border};
    --fc-button-text-color: ${({ theme }) => theme.colors.text};
    --fc-button-hover-bg-color: ${({ theme }) => theme.colors.surfaceMuted};
    --fc-button-hover-border-color: ${({ theme }) => theme.colors.border};
    --fc-button-active-bg-color: ${({ theme }) => theme.colors.surfaceMuted};
    --fc-button-active-border-color: ${({ theme }) => theme.colors.border};
    --fc-event-bg-color: ${({ theme }) => theme.colors.primary};
    --fc-event-border-color: ${({ theme }) => theme.colors.primary};
    --fc-today-bg-color: rgba(163, 160, 251, 0.1);
    color: ${({ theme }) => theme.colors.text};
    min-width: 760px;
  }

  .fc-toolbar {
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  .fc-toolbar-title {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }

  .fc-button {
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) => theme.shadows.panel};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    padding: 8px 18px;
    text-transform: capitalize;
  }

  .fc-button-primary:not(:disabled).fc-button-active,
  .fc-button-primary:not(:disabled):active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .fc-col-header-cell {
    background: ${({ theme }) => theme.colors.surfaceMuted};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    text-transform: uppercase;
  }

  .fc-daygrid-day-number {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    padding: ${({ theme }) => theme.spacing.lg};
  }

  .fc-event {
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: 0 4px 10px rgba(59, 134, 255, 0.22);
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    padding: 4px 8px;
  }
`;

const toDateString = (date: Date) => date.toISOString().slice(0, 10);

const getDateWithOffset = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return toDateString(date);
};

export const CalendarPage: FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [events, setEvents] = useState<CrmCalendarEvent[]>([
    {
      id: 'event-1',
      title: 'Client discovery call',
      start: getDateWithOffset(1),
      allDay: true,
    },
    {
      id: 'event-2',
      title: 'Product demo',
      start: `${getDateWithOffset(3)}T10:00:00`,
      end: `${getDateWithOffset(3)}T11:00:00`,
    },
    {
      id: 'event-3',
      title: 'Follow-up email',
      start: getDateWithOffset(5),
      allDay: true,
    },
  ]);

  const handleDateClick = (dateInfo: DateClickArg) => {
    setSelectedDate(dateInfo.dateStr);

    const title = window.prompt('Event title', 'New CRM activity');

    if (!title) {
      return;
    }

    setEvents((currentEvents) => [
      ...currentEvents,
      {
        id: `event-${currentEvents.length + 1}`,
        title,
        start: dateInfo.dateStr,
        allDay: dateInfo.allDay,
      },
    ]);
  };

  return (
    <PageStack>
      <PageHeader>
        <Eyebrow>Schedule</Eyebrow>
        <h1>Calendar</h1>
        <p>Planned client calls, demos, and CRM follow-ups.</p>
      </PageHeader>

      <CalendarPanel>
        <SectionHeading>
          <h2>Calendar View</h2>
          <StatusPill>
            {selectedDate ? `Selected: ${selectedDate}` : 'No date selected'}
          </StatusPill>
        </SectionHeading>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events as EventInput[]}
          dateClick={handleDateClick}
          height='auto'
          nowIndicator
          selectable
        />
      </CalendarPanel>
    </PageStack>
  );
};
