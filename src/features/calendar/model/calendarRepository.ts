import { calendarDb } from './calendarDb'
import type { CalendarEventEntity } from './types'

export const calendarRepository = {
  getEvents: async (): Promise<CalendarEventEntity[]> => {
    return calendarDb.events.orderBy('start').toArray()
  },

  createEvent: async (event: CalendarEventEntity): Promise<void> => {
    await calendarDb.events.add(event)
  },

  updateEvent: async (
    id: string,
    changes: Partial<CalendarEventEntity>,
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
