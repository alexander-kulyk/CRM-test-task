//core
import type { Dayjs } from 'dayjs'

export type EventPopupMode = 'create' | 'edit'

export interface IEventFormValues {
  title: string
  date: Dayjs | null
  time: Dayjs | null
  color: string
}

export interface IEventPopupProps {
  isOpen: boolean
  mode: EventPopupMode
  initialValues: IEventFormValues
  eventId?: string
  isProcessing: boolean
  referenceEl: HTMLElement | null
  onClose: () => void
  onApply: (values: IEventFormValues) => Promise<void>
  onSave: (eventId: string, values: IEventFormValues) => Promise<void>
  onDelete: (eventId: string) => Promise<void>
}
