//core
import styled from 'styled-components'

export const Field = styled.label`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

export const Control = styled.input<{ $hasError: boolean }>`
  background: transparent;
  border: 0;
  border-bottom: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.danger : theme.colors.border};
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.accent};
    outline: 0;
  }
`

export const ErrorText = styled.small`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`
