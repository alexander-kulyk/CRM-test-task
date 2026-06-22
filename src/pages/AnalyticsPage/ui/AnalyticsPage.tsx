//core
import type React from 'react'
//components
import {
  ErrorMessage,
  Eyebrow,
  PageHeader,
  PageStack,
  Panel,
  SectionHeading,
  StatusPill,
} from '../../../shared/components'
//other
import { EVENT_TREND } from '../config'
import { EventAnalyticsTable } from './EventAnalyticsTable'
import { EventTrendChart } from './EventTrendChart'

export const AnalyticsPage: React.FC = () => (
  <>
    <ErrorMessage />

    <PageStack>
      <PageHeader>
        <Eyebrow>CRM workspace</Eyebrow>
        <h1>Analytics</h1>
        <p>Event performance across registrations and attendance.</p>
      </PageHeader>

      <Panel>
        <SectionHeading>
          <h2>Events &amp; attendees by month</h2>
          <StatusPill>Demo data</StatusPill>
        </SectionHeading>

        <EventTrendChart data={EVENT_TREND} />
      </Panel>

      <Panel>
        <SectionHeading>
          <h2>Event breakdown</h2>
          <StatusPill>Demo data</StatusPill>
        </SectionHeading>

        <EventAnalyticsTable />
      </Panel>
    </PageStack>
  </>
)
