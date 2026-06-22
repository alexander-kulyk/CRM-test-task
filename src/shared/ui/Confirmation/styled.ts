//core
import styled from 'styled-components'

export const Overlay = styled.div`
  align-items: center;
  background: rgba(67, 66, 93, 0.45);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  position: fixed;
  z-index: 1000;
`

export const Dialog = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.popover};
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: calc(100vw - 32px);
  padding: ${({ theme }) => theme.spacing.xl};
  width: 360px;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md};
`

export const Actions = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const Button = styled.button`
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const CancelButton = styled(Button)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.surfaceMuted};
  }
`

export const ConfirmButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }
`
