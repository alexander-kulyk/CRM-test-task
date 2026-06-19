import type { Dayjs } from 'dayjs'

export type EventPopupMode = 'create' | 'edit'

export interface EventFormValues {
  title: string
  date: Dayjs | null
  time: Dayjs | null
  color: string
}

export interface EventPopupProps {
  isOpen: boolean
  mode: EventPopupMode
  initialValues: EventFormValues
  eventId?: string
  isProcessing: boolean
  referenceEl: HTMLElement | null
  onClose: () => void
  onApply: (values: EventFormValues) => Promise<void>
  onSave: (eventId: string, values: EventFormValues) => Promise<void>
  onDelete: (eventId: string) => Promise<void>
}
