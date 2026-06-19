//core
import styled from 'styled-components'

export const Overlay = styled.div`
  align-items: center;
  backdrop-filter: blur(3px);
  background: rgba(67, 66, 93, 0.45);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  inset: 0;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  position: fixed;
  z-index: 1000;
`

export const Card = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.popover};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 360px;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  width: 100%;
`

export const IconCircle = styled.div`
  align-items: center;
  background: rgba(255, 101, 101, 0.12);
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.danger};
  display: flex;
  height: 64px;
  justify-content: center;
  width: 64px;
`

export const Title = styled.strong`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  line-height: 1.5;
  margin: 0;
`

export const OkButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;

  &:hover {
    opacity: 0.92;
  }
`
