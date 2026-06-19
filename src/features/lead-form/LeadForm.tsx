import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'
import { Panel, SectionHeading, StatusPill } from '../../shared/components/Page'

const FormPanel = styled(Panel)`
  align-self: start;
`

const LeadFormElement = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

const FormField = styled.label`
  color: ${({ theme }) => theme.colors.textStrong};
  display: grid;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  gap: 7px;
`

const FieldControl = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textStrong};
  padding: 10px 12px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: 3px solid rgba(163, 160, 251, 0.18);
  }
`

const SelectControl = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textStrong};
  padding: 10px 12px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: 3px solid rgba(163, 160, 251, 0.18);
  }
`

const FieldError = styled.small`
  color: ${({ theme }) => theme.colors.danger};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  padding: 10px 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`

const FormResult = styled.p`
  background: ${({ theme }) => theme.colors.successBackground};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.successText};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: 10px 12px;
`

const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  status: z.enum(['new', 'qualified', 'contacted']),
})

type LeadFormValues = z.infer<typeof leadFormSchema>

const defaultValues: LeadFormValues = {
  name: '',
  email: '',
  status: 'new',
}

export function LeadForm() {
  const [submittedLead, setSubmittedLead] = useState<LeadFormValues | null>(
    null,
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues,
  })

  const handleLeadSubmit: SubmitHandler<LeadFormValues> = (values) => {
    setSubmittedLead(values)
    reset(defaultValues)
  }

  return (
    <FormPanel>
      <SectionHeading>
        <h2>New lead</h2>
        <StatusPill>React Hook Form</StatusPill>
      </SectionHeading>

      <LeadFormElement onSubmit={handleSubmit(handleLeadSubmit)}>
        <FormField>
          <span>Name</span>
          <FieldControl type="text" {...register('name')} />
          {errors.name ? (
            <FieldError>{errors.name.message}</FieldError>
          ) : null}
        </FormField>

        <FormField>
          <span>Email</span>
          <FieldControl type="email" {...register('email')} />
          {errors.email ? (
            <FieldError>{errors.email.message}</FieldError>
          ) : null}
        </FormField>

        <FormField>
          <span>Status</span>
          <SelectControl {...register('status')}>
            <option value="new">New</option>
            <option value="qualified">Qualified</option>
            <option value="contacted">Contacted</option>
          </SelectControl>
        </FormField>

        <SubmitButton type="submit">Save lead</SubmitButton>
      </LeadFormElement>

      {submittedLead ? (
        <FormResult>
          Saved {submittedLead.name} as {submittedLead.status}.
        </FormResult>
      ) : null}
    </FormPanel>
  )
}
