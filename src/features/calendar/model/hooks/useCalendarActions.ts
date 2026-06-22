//core
import { useCallback, useState } from 'react';
//other
import { useErrorContext } from '../../../../shared/context';
import { calendarRepository } from '../../api';
import type { ICalendarEventEntity } from '../types';

export interface IUseCalendarActionsResult {
  isProcessing: boolean;
  createEvent: (event: ICalendarEventEntity) => Promise<boolean>;
  updateEvent: (
    id: string,
    changes: Partial<ICalendarEventEntity>,
  ) => Promise<boolean>;
  deleteEvent: (id: string) => Promise<boolean>;
  moveEvent: (id: string, start: string, end?: string) => Promise<boolean>;
}

export const useCalendarActions = (): IUseCalendarActionsResult => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { addError } = useErrorContext();

  const createEvent = useCallback(
    async (event: ICalendarEventEntity): Promise<boolean> => {
      setIsProcessing(true);

      try {
        await calendarRepository.createEvent(event);
        return true;
      } catch (error) {
        console.log(error);
        addError('Failed to create calendar event.');
        return false;
      } finally {
        setIsProcessing(false);
      }
    },
    [addError],
  );

  const updateEvent = useCallback(
    async (
      id: string,
      changes: Partial<ICalendarEventEntity>,
    ): Promise<boolean> => {
      setIsProcessing(true);

      try {
        await calendarRepository.updateEvent(id, changes);
        return true;
      } catch (error) {
        console.log(error);
        addError('Failed to update calendar event.');
        return false;
      } finally {
        setIsProcessing(false);
      }
    },
    [addError],
  );

  const deleteEvent = useCallback(
    async (id: string): Promise<boolean> => {
      setIsProcessing(true);

      try {
        await calendarRepository.deleteEvent(id);
        return true;
      } catch (error) {
        console.log(error);
        addError('Failed to delete calendar event.');
        return false;
      } finally {
        setIsProcessing(false);
      }
    },
    [addError],
  );

  const moveEvent = useCallback(
    async (id: string, start: string, end?: string): Promise<boolean> => {
      setIsProcessing(true);

      try {
        await calendarRepository.moveEvent(id, start, end);
        return true;
      } catch (error) {
        console.log(error);
        addError('Failed to move calendar event.');
        return false;
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
