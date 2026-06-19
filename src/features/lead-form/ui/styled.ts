//core
import styled from 'styled-components'
//components
import { Panel } from '../../../shared/components'

export const FormPanel = styled(Panel)`
  align-self: start;
`

export const LeadFormElement = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const FormField = styled.label`
  color: ${({ theme }) => theme.colors.textStrong};
  display: grid;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  gap: 7px;
`

export const FieldControl = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textStrong};
  padding: 10px 12px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: 3px solid rgba(163, 160, 251, 0.18);
  }
`

export const SelectControl = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textStrong};
  padding: 10px 12px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: 3px solid rgba(163, 160, 251, 0.18);
  }
`

export const FieldError = styled.small`
  color: ${({ theme }) => theme.colors.danger};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

export const SubmitButton = styled.button`
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

export const FormResult = styled.p`
  background: ${({ theme }) => theme.colors.successBackground};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.successText};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: 10px 12px;
`
