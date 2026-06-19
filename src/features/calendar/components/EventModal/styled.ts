import styled from 'styled-components'

export const Popover = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.popover};
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: calc(100vw - 32px);
  padding: ${({ theme }) => theme.spacing.xl};
  transform-origin: top center;
  width: 320px;
  z-index: 50;
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

export const CloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  height: 28px;
  justify-content: center;
  line-height: 1;
  width: 28px;

  &:hover {
    color: ${({ theme }) => theme.colors.textStrong};
  }
`

export const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: flex-end;
`

export const DeleteButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.danger};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: 0;
  margin-right: auto;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  text-transform: uppercase;

  &:disabled {
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
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
