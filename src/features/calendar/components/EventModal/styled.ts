import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const DiscardButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.danger};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: 0;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.textStrong};
  }
`

export const SubmitButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: 0;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  text-transform: uppercase;

  &:disabled {
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`
