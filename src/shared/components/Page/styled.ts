import styled from 'styled-components'

export const PageStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const PageHeader = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};

  h1 {
    font-size: ${({ theme }) => theme.typography.sizes.pageTitle};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }

  p:last-child {
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 680px;
  }
`

export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
`

export const DashboardGrid = styled.div`
  align-items: start;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-columns: minmax(0, 1fr) minmax(320px, 380px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Panel = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: ${({ theme }) => theme.shadows.panel};
  padding: ${({ theme }) => theme.spacing.xl};
`

export const SectionHeading = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const StatusPill = styled.span`
  background: ${({ theme }) => theme.colors.successBackground};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.successText};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  padding: 5px ${({ theme }) => theme.spacing.md};
  white-space: nowrap;
`
