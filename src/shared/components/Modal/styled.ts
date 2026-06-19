//core
import styled from 'styled-components'

export const Backdrop = styled.div`
  align-items: center;
  background: rgba(67, 66, 93, 0.32);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  position: fixed;
  z-index: 50;
`

export const Dialog = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.popover};
  display: grid;
  max-height: calc(100vh - 48px);
  max-width: 420px;
  overflow-y: auto;
  width: min(100%, 420px);
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.md};
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
  text-transform: uppercase;
  width: 28px;

  &:hover {
    color: ${({ theme }) => theme.colors.textStrong};
  }
`

export const Body = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.xl};
`
