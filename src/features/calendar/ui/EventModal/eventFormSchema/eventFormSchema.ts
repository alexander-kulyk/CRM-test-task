import dayjs from 'dayjs'
import { z } from 'zod'
import type { EventFormValues } from '../types'

export const eventFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Event name is required')
    .max(30, 'Maximum number of characters is 30'),
  date: z.custom<EventFormValues['date']>(
    (value) => dayjs.isDayjs(value) && value.isValid(),
    { message: 'Date is required' },
  ),
  time: z.custom<EventFormValues['time']>(
    (value) => dayjs.isDayjs(value) && value.isValid(),
    { message: 'Time is required' },
  ),
  color: z
    .string()
    .min(1, 'Color is required')
    .regex(/^#[0-9A-Fa-f]{6}$/, 'Color must be a valid HEX value'),
})
