import type { EventFormValues } from '../types'

export const DEFAULT_EVENT_COLOR = '#007bff'
export const DEFAULT_EVENT_HOUR = 9
export const DEFAULT_EVENT_MINUTE = 0

export const EMPTY_EVENT_FORM_VALUES: EventFormValues = {
  title: '',
  date: null,
  time: null,
  color: DEFAULT_EVENT_COLOR,
}
