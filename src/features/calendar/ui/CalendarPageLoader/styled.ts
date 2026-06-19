//core
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoaderOverlay = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  min-height: 60vh;
  width: 100%;
`

export const Spinner = styled.div`
  animation: ${spin} 0.8s linear infinite;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  border-top-color: ${({ theme }) => theme.colors.primary};
  height: 40px;
  width: 40px;
`

export const LoaderLabel = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  margin: 0;
`
