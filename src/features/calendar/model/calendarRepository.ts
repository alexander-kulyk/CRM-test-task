//other
import { calendarDb } from './calendarDb'
import type { ICalendarEventEntity } from './types'

export const calendarRepository = {
  getEvents: async (): Promise<ICalendarEventEntity[]> => {
    return calendarDb.events.orderBy('start').toArray()
  },

  createEvent: async (event: ICalendarEventEntity): Promise<void> => {
    await calendarDb.events.add(event)
  },

  updateEvent: async (
    id: string,
    changes: Partial<ICalendarEventEntity>,
  ): Promise<number> => {
    return calendarDb.events.update(id, {
      ...changes,
      updatedAt: new Date().toISOString(),
    })
  },

  deleteEvent: async (id: string): Promise<void> => {
    await calendarDb.events.delete(id)
  },

  moveEvent: async (
    id: string,
    start: string,
    end?: string,
  ): Promise<number> => {
    return calendarDb.events.update(id, {
      start,
      end,
      updatedAt: new Date().toISOString(),
    })
  },
}
