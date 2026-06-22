//core
import type { Dayjs } from 'dayjs'
//other
import type { IEventFormValues } from './eventFormTypes'
import type { ICalendarEventEntity } from '../types'

export const combineDateAndTime = (date: Dayjs, time: Dayjs): string => {
  return date
    .hour(time.hour())
    .minute(time.minute())
    .second(0)
    .millisecond(0)
    .format()
}

export const mapFormValuesToCreateEvent = (
  values: IEventFormValues,
): ICalendarEventEntity => {
  const start = combineDateAndTime(values.date!, values.time!)
  const now = new Date().toISOString()

  return {
    id: crypto.randomUUID(),
    title: values.title.trim(),
    start,
    allDay: false,
    backgroundColor: values.color,
    borderColor: values.color,
    createdAt: now,
    updatedAt: now,
  }
}

export const mapFormValuesToEventChanges = (
  values: IEventFormValues,
): Partial<ICalendarEventEntity> => {
  const start = combineDateAndTime(values.date!, values.time!)
  const now = new Date().toISOString()

  return {
    title: values.title.trim(),
    start,
    allDay: false,
    backgroundColor: values.color,
    borderColor: values.color,
    updatedAt: now,
  }
}
