export interface CalendarEventEntity {
  id: string
  title: string
  start: string
  end?: string
  allDay?: boolean
  backgroundColor?: string
  borderColor?: string
  createdAt: string
  updatedAt: string
}
