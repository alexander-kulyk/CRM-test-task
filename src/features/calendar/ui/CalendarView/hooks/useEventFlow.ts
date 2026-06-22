//core
import type { EventClickArg, EventDropArg } from '@fullcalendar/core';
import type { DateClickArg } from '@fullcalendar/interaction';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
//other
import {
  DEFAULT_EVENT_COLOR,
  DEFAULT_EVENT_DURATION_HOURS,
  DEFAULT_EVENT_HOUR,
  DEFAULT_EVENT_MINUTE,
  EMPTY_EVENT_FORM_VALUES,
  mapFormValuesToCreateEvent,
  mapFormValuesToEventChanges,
  type EventPopupMode,
  type IEventFormValues,
} from '../../../model';

interface IEventModalState {
  isOpen: boolean;
  mode: EventPopupMode;
  eventId?: string;
  initialValues: IEventFormValues;
  anchorEl: HTMLElement | null;
}

interface IUseEventFlowParams {
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

interface IUseEventFlowReturn {
  modalState: IEventModalState;
  closeModal: () => void;
  handleDateClick: (info: DateClickArg) => void;
  handleEventClick: (info: EventClickArg) => void;
  handleApply: (values: IEventFormValues) => Promise<void>;
  handleSave: (eventId: string, values: IEventFormValues) => Promise<void>;
  requestDelete: (eventId: string) => void;
  confirmDelete: () => Promise<void>;
  cancelDelete: () => void;
  isConfirmingDelete: boolean;
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
}: IUseEventFlowParams): IUseEventFlowReturn => {
  const [modalState, setModalState] =
    useState<IEventModalState>(CLOSED_MODAL_STATE);
  const [deleteCandidateId, setDeleteCandidateId] = useState<string | null>(
    null,
  );

  const closeModal = useCallback((): void => {
    setModalState(CLOSED_MODAL_STATE);
  }, []);

  const handleDateClick = useCallback((info: DateClickArg): void => {
    const clickedDate = dayjs(info.date);
    const startTime = info.allDay
      ? clickedDate.hour(DEFAULT_EVENT_HOUR).minute(DEFAULT_EVENT_MINUTE)
      : clickedDate;
    const endTime = startTime.add(DEFAULT_EVENT_DURATION_HOURS, 'hour');

    setModalState({
      isOpen: true,
      mode: 'create',
      anchorEl: info.dayEl,
      initialValues: {
        title: '',
        date: clickedDate,
        startTime,
        endTime,
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
    const eventEnd = info.event.end
      ? dayjs(info.event.end)
      : eventStart.add(DEFAULT_EVENT_DURATION_HOURS, 'hour');
    const eventColor = info.event.backgroundColor || DEFAULT_EVENT_COLOR;

    setModalState({
      isOpen: true,
      mode: 'edit',
      eventId: info.event.id,
      anchorEl: info.el,
      initialValues: {
        title: info.event.title,
        date: eventStart,
        startTime: eventStart,
        endTime: eventEnd,
        color: eventColor,
      },
    });
  }, []);

  const handleApply = useCallback(
    async (values: IEventFormValues): Promise<void> => {
      const event = mapFormValuesToCreateEvent(values);
      const isCreated = await createEvent(event);

      if (isCreated) {
        closeModal();
      }
    },
    [closeModal, createEvent],
  );

  const handleSave = useCallback(
    async (eventId: string, values: IEventFormValues): Promise<void> => {
      const changes = mapFormValuesToEventChanges(values);
      const isUpdated = await updateEvent(eventId, changes);

      if (isUpdated) {
        closeModal();
      }
    },
    [closeModal, updateEvent],
  );

  const requestDelete = useCallback(
    (eventId: string): void => {
      setDeleteCandidateId(eventId);
      closeModal();
    },
    [closeModal],
  );

  const cancelDelete = useCallback((): void => {
    setDeleteCandidateId(null);
  }, []);

  const confirmDelete = useCallback(async (): Promise<void> => {
    if (!deleteCandidateId) {
      return;
    }

    const isDeleted = await deleteEvent(deleteCandidateId);

    if (isDeleted) {
      setDeleteCandidateId(null);
    }
  }, [deleteCandidateId, deleteEvent]);

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
    requestDelete,
    confirmDelete,
    cancelDelete,
    isConfirmingDelete: deleteCandidateId !== null,
    handleEventDrop,
  };
};
