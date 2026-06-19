import type { Dayjs } from 'dayjs'

export type EventModalMode = 'create' | 'edit'

export interface EventFormValues {
  title: string
  date: Dayjs | null
  time: Dayjs | null
  color: string
}

export interface EventModalProps {
  isOpen: boolean
  mode: EventModalMode
  initialValues: EventFormValues
  eventId?: string
  isProcessing: boolean
  onClose: () => void
  onApply: (values: EventFormValues) => Promise<void>
  onSave: (eventId: string, values: EventFormValues) => Promise<void>
}
