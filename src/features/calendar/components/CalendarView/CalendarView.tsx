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
import { useCalendarActions, useCalendarEvents } from '../../model';
import { mapEntityToEventInput } from '../../utils';
import { EventModal } from '../EventModal';
import { useEventFlow } from './hooks';
import * as S from './styled';

export const CalendarView: React.FC = () => {
  const events = useCalendarEvents();
  const { isProcessing, createEvent, updateEvent } = useCalendarActions();

  const {
    modalState,
    closeModal,
    handleDateClick,
    handleEventClick,
    handleApply,
    handleSave,
  } = useEventFlow({
    createEvent,
    updateEvent,
  });

  const calendarEvents = useMemo<EventInput[]>(
    () => events.map(mapEntityToEventInput),
    [events],
  );

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
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
      </S.CalendarPanel>

      <EventModal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        eventId={modalState.eventId}
        initialValues={modalState.initialValues}
        isProcessing={isProcessing}
        onClose={closeModal}
        onApply={handleApply}
        onSave={handleSave}
      />
    </PageStack>
  );
};
