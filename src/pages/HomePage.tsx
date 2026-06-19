import styled from 'styled-components'
import { LeadForm } from '../features/lead-form/LeadForm'
import {
  DashboardGrid,
  Eyebrow,
  PageHeader,
  PageStack,
  Panel,
  SectionHeading,
  StatusPill,
} from '../shared/components/Page'

const StatsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 18px;
`

const StatValue = styled.span`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: ${({ theme }) => theme.typography.sizes.stat};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`

const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

export function HomePage() {
  return (
    <PageStack>
      <PageHeader>
        <Eyebrow>CRM workspace</Eyebrow>
        <h1>Lead dashboard</h1>
        <p>Today&apos;s lead activity and follow-up status.</p>
      </PageHeader>

      <DashboardGrid>
        <Panel>
          <SectionHeading>
            <h2>Pipeline snapshot</h2>
            <StatusPill>Demo data</StatusPill>
          </SectionHeading>

          <StatsGrid>
            <StatItem>
              <StatValue>12</StatValue>
              <StatLabel>New leads</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>5</StatValue>
              <StatLabel>Qualified</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>3</StatValue>
              <StatLabel>Calls booked</StatLabel>
            </StatItem>
          </StatsGrid>
        </Panel>

        <LeadForm />
      </DashboardGrid>
    </PageStack>
  )
}
