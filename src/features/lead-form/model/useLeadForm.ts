import { type BaseSyntheticEvent, useCallback, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  type FieldErrors,
  type SubmitHandler,
  type UseFormRegister,
  useForm,
} from 'react-hook-form'
import {
  DEFAULT_LEAD_VALUES,
  type LeadFormValues,
  leadFormSchema,
} from '../config'

interface IUseLeadFormReturn {
  values: {
    submittedLead: LeadFormValues | null
    errors: FieldErrors<LeadFormValues>
  }
  register: UseFormRegister<LeadFormValues>
  onSubmit: (event?: BaseSyntheticEvent) => Promise<void>
}

export const useLeadForm = (): IUseLeadFormReturn => {
  const [submittedLead, setSubmittedLead] = useState<LeadFormValues | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: DEFAULT_LEAD_VALUES,
  })

  const handleLeadSubmit = useCallback<SubmitHandler<LeadFormValues>>(
    (values) => {
      setSubmittedLead(values)
      reset(DEFAULT_LEAD_VALUES)
    },
    [reset],
  )

  return {
    values: { submittedLead, errors },
    register,
    onSubmit: handleSubmit(handleLeadSubmit),
  }
}
