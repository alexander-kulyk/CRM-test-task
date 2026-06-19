import { useCallback, useState } from 'react';
import { useErrorContext } from '../../../shared/context';
import { calendarRepository } from './calendarRepository';
import type { CalendarEventEntity } from './types';

export interface UseCalendarActionsResult {
  isProcessing: boolean;
  createEvent: (event: CalendarEventEntity) => Promise<void>;
  updateEvent: (
    id: string,
    changes: Partial<CalendarEventEntity>,
  ) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  moveEvent: (id: string, start: string, end?: string) => Promise<void>;
}

export const useCalendarActions = (): UseCalendarActionsResult => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { addError } = useErrorContext();

  const createEvent = useCallback(
    async (event: CalendarEventEntity): Promise<void> => {
      setIsProcessing(true);

      try {
        await calendarRepository.createEvent(event);
      } catch (error) {
        console.log(error);
        addError('Failed to create calendar event.');
      } finally {
        setIsProcessing(false);
      }
    },
    [addError],
  );

  const updateEvent = useCallback(
    async (
      id: string,
      changes: Partial<CalendarEventEntity>,
    ): Promise<void> => {
      setIsProcessing(true);

      try {
        await calendarRepository.updateEvent(id, changes);
      } catch (error) {
        console.log(error);
        addError('Failed to update calendar event.');
      } finally {
        setIsProcessing(false);
      }
    },
    [addError],
  );

  const deleteEvent = useCallback(
    async (id: string): Promise<void> => {
      setIsProcessing(true);

      try {
        await calendarRepository.deleteEvent(id);
      } catch (error) {
        console.log(error);
        addError('Failed to delete calendar event.');
      } finally {
        setIsProcessing(false);
      }
    },
    [addError],
  );

  const moveEvent = useCallback(
    async (id: string, start: string, end?: string): Promise<void> => {
      setIsProcessing(true);

      try {
        await calendarRepository.moveEvent(id, start, end);
      } catch (error) {
        console.log(error);
        addError('Failed to move calendar event.');
      } finally {
        setIsProcessing(false);
      }
    },
    [addError],
  );

  return {
    isProcessing,
    createEvent,
    updateEvent,
    deleteEvent,
    moveEvent,
  };
};
