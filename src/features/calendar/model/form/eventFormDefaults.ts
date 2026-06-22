//other
import type { IEventFormValues } from './eventFormTypes'

export const DEFAULT_EVENT_COLOR = '#007bff'
export const DEFAULT_EVENT_HOUR = 9
export const DEFAULT_EVENT_MINUTE = 0
export const DEFAULT_EVENT_DURATION_HOURS = 1

export const EMPTY_EVENT_FORM_VALUES: IEventFormValues = {
  title: '',
  date: null,
  startTime: null,
  endTime: null,
  color: DEFAULT_EVENT_COLOR,
}
