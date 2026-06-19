import type React from 'react'
import { LeadForm } from '../../../features/lead-form'
import {
  DashboardGrid,
  ErrorMessage,
  Eyebrow,
  PageHeader,
  PageStack,
  Panel,
  SectionHeading,
  StatusPill,
} from '../../../shared/components'
import { PIPELINE_STATS } from '../config'
import * as S from './styled'

export const HomePage: React.FC = () => (
  <>
    <ErrorMessage />

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

          <S.StatsGrid>
            {PIPELINE_STATS.map((stat) => (
              <S.StatItem key={stat.label}>
                <S.StatValue>{stat.value}</S.StatValue>
                <S.StatLabel>{stat.label}</S.StatLabel>
              </S.StatItem>
            ))}
          </S.StatsGrid>
        </Panel>

        <LeadForm />
      </DashboardGrid>
    </PageStack>
  </>
)
