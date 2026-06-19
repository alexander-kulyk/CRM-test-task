import type React from 'react'
import { SectionHeading, StatusPill } from '../../../shared/components'
import { LEAD_STATUS_OPTIONS } from '../config'
import { useLeadForm } from '../model'
import * as S from './styled'

export const LeadForm: React.FC = () => {
  const { values, register, onSubmit } = useLeadForm()

  return (
    <S.FormPanel>
      <SectionHeading>
        <h2>New lead</h2>
        <StatusPill>React Hook Form</StatusPill>
      </SectionHeading>

      <S.LeadFormElement onSubmit={onSubmit}>
        <S.FormField>
          <span>Name</span>
          <S.FieldControl type="text" {...register('name')} />
          {values.errors.name && (
            <S.FieldError>{values.errors.name.message}</S.FieldError>
          )}
        </S.FormField>

        <S.FormField>
          <span>Email</span>
          <S.FieldControl type="email" {...register('email')} />
          {values.errors.email && (
            <S.FieldError>{values.errors.email.message}</S.FieldError>
          )}
        </S.FormField>

        <S.FormField>
          <span>Status</span>
          <S.SelectControl {...register('status')}>
            {LEAD_STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectControl>
        </S.FormField>

        <S.SubmitButton type="submit">Save lead</S.SubmitButton>
      </S.LeadFormElement>

      {values.submittedLead && (
        <S.FormResult>
          Saved {values.submittedLead.name} as {values.submittedLead.status}.
        </S.FormResult>
      )}
    </S.FormPanel>
  )
}
