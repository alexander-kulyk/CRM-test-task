//core
import type { EventInput } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import { useMemo } from 'react';
import type React from 'react';
//components
import {
  SectionHeading,
  PageHeader,
  PageStack,
  Eyebrow,
} from '../../../../shared/components';
import { EventPopup } from '../EventModal';
//other
import { CALENDAR_HEADER_TOOLBAR, CALENDAR_PLUGINS } from '../../config';
import { useCalendarActions, useCalendarEvents } from '../../model';
import { mapEntityToEventInput } from '../../lib';
import { useEventFlow } from './hooks';
import * as S from './styled';

export const CalendarView: React.FC = () => {
  const events = useCalendarEvents();
  const { isProcessing, createEvent, updateEvent, moveEvent, deleteEvent } =
    useCalendarActions();

  const {
    modalState,
    closeModal,
    handleDateClick,
    handleEventClick,
    handleApply,
    handleSave,
    handleDelete,
    handleEventDrop,
  } = useEventFlow({
    createEvent,
    updateEvent,
    moveEvent,
    deleteEvent,
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
          eventDisplay='block'
          height='auto'
          nowIndicator
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
          eventDrop={handleEventDrop}
        />
      </S.CalendarPanel>

      <EventPopup
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        eventId={modalState.eventId}
        initialValues={modalState.initialValues}
        referenceEl={modalState.anchorEl}
        isProcessing={isProcessing}
        onClose={closeModal}
        onApply={handleApply}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </PageStack>
  );
};
