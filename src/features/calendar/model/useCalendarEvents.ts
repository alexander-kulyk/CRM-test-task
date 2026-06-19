import { useLiveQuery } from 'dexie-react-hooks'
import { useErrorContext } from '../../../shared/context'
import { calendarRepository } from './calendarRepository'
import type { CalendarEventEntity } from './types'

export const useCalendarEvents = (): CalendarEventEntity[] => {
  const { addError } = useErrorContext()

  return useLiveQuery(
    async () => {
      try {
        return await calendarRepository.getEvents()
      } catch (error) {
        console.log(error)
        addError('Failed to load calendar events.')
        return []
      }
    },
    [addError],
    [],
  )
}
