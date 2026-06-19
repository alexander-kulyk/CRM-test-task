import Dexie, { type EntityTable } from 'dexie'
import type { CalendarEventEntity } from './types'

export const calendarDb = new Dexie('calendar-db') as Dexie & {
  events: EntityTable<CalendarEventEntity, 'id'>
}

calendarDb.version(1).stores({
  events: 'id, start',
})
