//core
import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  status: z.enum(['new', 'qualified', 'contacted']),
})

export type LeadFormValues = z.infer<typeof leadFormSchema>

export const DEFAULT_LEAD_VALUES: LeadFormValues = {
  name: '',
  email: '',
  status: 'new',
}

interface ILeadStatusOption {
  value: LeadFormValues['status']
  label: string
}

export const LEAD_STATUS_OPTIONS: ILeadStatusOption[] = [
  { value: 'new', label: 'New' },
  { value: 'qualified', label: 'Qualified' },
  { value: 'contacted', label: 'Contacted' },
]
