import { useCallback, useState } from 'react';
import type { EventClickArg, EventDropArg } from '@fullcalendar/core';
import type { DateClickArg } from '@fullcalendar/interaction';
import dayjs from 'dayjs';
import {
  DEFAULT_EVENT_COLOR,
  DEFAULT_EVENT_HOUR,
  DEFAULT_EVENT_MINUTE,
  EMPTY_EVENT_FORM_VALUES,
  mapFormValuesToCreateEvent,
  mapFormValuesToEventChanges,
  type EventFormValues,
  type EventPopupMode,
} from '../../EventModal';

interface IEventModalState {
  isOpen: boolean;
  mode: EventPopupMode;
  eventId?: string;
  initialValues: EventFormValues;
  anchorEl: HTMLElement | null;
}

interface UseEventFlowParams {
  createEvent: (
    event: ReturnType<typeof mapFormValuesToCreateEvent>,
  ) => Promise<boolean>;
  updateEvent: (
    eventId: string,
    changes: ReturnType<typeof mapFormValuesToEventChanges>,
  ) => Promise<boolean>;
  moveEvent: (id: string, start: string, end?: string) => Promise<boolean>;
  deleteEvent: (id: string) => Promise<boolean>;
}

interface UseEventFlowReturn {
  modalState: IEventModalState;
  closeModal: () => void;
  handleDateClick: (info: DateClickArg) => void;
  handleEventClick: (info: EventClickArg) => void;
  handleApply: (values: EventFormValues) => Promise<void>;
  handleSave: (eventId: string, values: EventFormValues) => Promise<void>;
  handleDelete: (eventId: string) => Promise<void>;
  handleEventDrop: (dropInfo: EventDropArg) => Promise<void>;
}

const CLOSED_MODAL_STATE: IEventModalState = {
  isOpen: false,
  mode: 'create',
  initialValues: EMPTY_EVENT_FORM_VALUES,
  anchorEl: null,
};

export const useEventFlow = ({
  createEvent,
  updateEvent,
  moveEvent,
  deleteEvent,
}: UseEventFlowParams): UseEventFlowReturn => {
  const [modalState, setModalState] =
    useState<IEventModalState>(CLOSED_MODAL_STATE);

  const closeModal = useCallback((): void => {
    setModalState(CLOSED_MODAL_STATE);
  }, []);

  const handleDateClick = useCallback((info: DateClickArg): void => {
    const clickedDate = dayjs(info.date);
    const selectedTime = info.allDay
      ? clickedDate.hour(DEFAULT_EVENT_HOUR).minute(DEFAULT_EVENT_MINUTE)
      : clickedDate;

    setModalState({
      isOpen: true,
      mode: 'create',
      anchorEl: info.dayEl,
      initialValues: {
        title: '',
        date: clickedDate,
        time: selectedTime,
        color: DEFAULT_EVENT_COLOR,
      },
    });
  }, []);

  const handleEventClick = useCallback((info: EventClickArg): void => {
    info.jsEvent.preventDefault();

    if (!info.event.start) {
      return;
    }

    const eventStart = dayjs(info.event.start);
    const eventColor = info.event.backgroundColor || DEFAULT_EVENT_COLOR;

    setModalState({
      isOpen: true,
      mode: 'edit',
      eventId: info.event.id,
      anchorEl: info.el,
      initialValues: {
        title: info.event.title,
        date: eventStart,
        time: eventStart,
        color: eventColor,
      },
    });
  }, []);

  const handleApply = useCallback(
    async (values: EventFormValues): Promise<void> => {
      const event = mapFormValuesToCreateEvent(values);
      const isCreated = await createEvent(event);

      if (isCreated) {
        closeModal();
      }
    },
    [closeModal, createEvent],
  );

  const handleSave = useCallback(
    async (eventId: string, values: EventFormValues): Promise<void> => {
      const changes = mapFormValuesToEventChanges(values);
      const isUpdated = await updateEvent(eventId, changes);

      if (isUpdated) {
        closeModal();
      }
    },
    [closeModal, updateEvent],
  );

  const handleDelete = useCallback(
    async (eventId: string): Promise<void> => {
      const isDeleted = await deleteEvent(eventId);

      if (isDeleted) {
        closeModal();
      }
    },
    [closeModal, deleteEvent],
  );

  const handleEventDrop = useCallback(
    async (dropInfo: EventDropArg): Promise<void> => {
      const success = await moveEvent(
        dropInfo.event.id,
        dropInfo.event.startStr,
        dropInfo.event.endStr || undefined,
      );

      if (!success) {
        dropInfo.revert();
      }
    },
    [moveEvent],
  );

  return {
    modalState,
    closeModal,
    handleDateClick,
    handleEventClick,
    handleApply,
    handleSave,
    handleDelete,
    handleEventDrop,
  };
};
