//core
import dayjs from 'dayjs'
import { z } from 'zod'
//other
import type { IEventFormValues } from './eventFormTypes'

export const eventFormSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, 'Event name is required')
      .max(30, 'Maximum number of characters is 30'),
    date: z.custom<IEventFormValues['date']>(
      (value) => dayjs.isDayjs(value) && value.isValid(),
      { message: 'Date is required' },
    ),
    startTime: z.custom<IEventFormValues['startTime']>(
      (value) => dayjs.isDayjs(value) && value.isValid(),
      { message: 'Start time is required' },
    ),
    endTime: z.custom<IEventFormValues['endTime']>(
      (value) => dayjs.isDayjs(value) && value.isValid(),
      { message: 'End time is required' },
    ),
    color: z
      .string()
      .min(1, 'Color is required')
      .regex(/^#[0-9A-Fa-f]{6}$/, 'Color must be a valid HEX value'),
  })
  .refine(
    ({ startTime, endTime }) => {
      if (!dayjs.isDayjs(startTime) || !dayjs.isDayjs(endTime)) {
        return true
      }

      const startMinutes = startTime.hour() * 60 + startTime.minute()
      const endMinutes = endTime.hour() * 60 + endTime.minute()

      return endMinutes > startMinutes
    },
    { message: 'End time must be after start time', path: ['endTime'] },
  )
