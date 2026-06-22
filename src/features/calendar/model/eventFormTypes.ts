//core
import type { Dayjs } from 'dayjs'

export type EventPopupMode = 'create' | 'edit'

export interface IEventFormValues {
  title: string
  date: Dayjs | null
  time: Dayjs | null
  color: string
}
