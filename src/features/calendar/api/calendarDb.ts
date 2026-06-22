//core
import Dexie, { type EntityTable } from 'dexie'
//other
import type { ICalendarEventEntity } from '../model'

export const calendarDb = new Dexie('calendar-db') as Dexie & {
  events: EntityTable<ICalendarEventEntity, 'id'>
}

calendarDb.version(1).stores({
  events: 'id, start',
})
