//core
import { useLiveQuery } from 'dexie-react-hooks'
//other
import { useErrorContext } from '../../../../shared/context'
import { calendarRepository } from '../../api'
import type { ICalendarEventEntity } from '../types'

export const useCalendarEvents = (): ICalendarEventEntity[] => {
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
