//core
import type { Dayjs } from 'dayjs'

export type EventPopupMode = 'create' | 'edit'

export interface IEventFormValues {
  title: string
  date: Dayjs | null
  startTime: Dayjs | null
  endTime: Dayjs | null
  color: string
}
