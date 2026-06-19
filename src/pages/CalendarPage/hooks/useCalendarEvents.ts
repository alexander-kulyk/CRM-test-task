import { useCallback, useState } from 'react'
import type { EventInput } from '@fullcalendar/core'
import type { DateClickArg } from '@fullcalendar/interaction'
import type { ICrmCalendarEvent } from '../../../shared/types/calendar'
import { NEW_EVENT_TITLE, createInitialEvents } from '../constants'

interface IUseCalendarEventsReturn {
  values: {
    selectedDate: string | null
    events: EventInput[]
  }
  handlers: {
    handleDateClick: (dateInfo: DateClickArg) => void
  }
}

export const useCalendarEvents = (): IUseCalendarEventsReturn => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [events, setEvents] = useState<ICrmCalendarEvent[]>(createInitialEvents)

  const handleDateClick = useCallback((dateInfo: DateClickArg): void => {
    setSelectedDate(dateInfo.dateStr)

    const title = window.prompt('Event title', NEW_EVENT_TITLE)

    if (!title) {
      return
    }

    setEvents((currentEvents) => [
      ...currentEvents,
      {
        id: `event-${currentEvents.length + 1}`,
        title,
        start: dateInfo.dateStr,
        allDay: dateInfo.allDay,
      },
    ])
  }, [])

  return {
    values: { selectedDate, events: events as EventInput[] },
    handlers: { handleDateClick },
  }
}
