import { useLiveQuery } from 'dexie-react-hooks'
import { calendarRepository } from './calendarRepository'
import type { CalendarEventEntity } from './types'

export const useCalendarEvents = (): CalendarEventEntity[] | undefined => {
  return useLiveQuery(() => calendarRepository.getEvents(), [])
}
