//core
import styled from 'styled-components'

export const Field = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

export const PickerShell = styled.div<{ $hasError: boolean }>`
  .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.textStrong};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.sizes.md};
  }

  .MuiInputBase-root::before {
    border-bottom-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.danger : theme.colors.border};
  }

  .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error)::before {
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }

  .MuiInputBase-root::after {
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }

  .MuiInputBase-input {
    padding: ${({ theme }) => theme.spacing.sm} 0;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }

  .MuiFormHelperText-root {
    color: ${({ theme }) => theme.colors.danger};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    margin-left: 0;
  }
`
