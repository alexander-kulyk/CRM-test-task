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
import { UsersTable } from './UsersTable'

export const UsersPage: React.FC = () => (
  <>
    <ErrorMessage />

    <PageStack>
      <PageHeader>
        <Eyebrow>CRM workspace</Eyebrow>
        <h1>Users</h1>
        <p>Directory of CRM users and their contact details.</p>
      </PageHeader>

      <Panel>
        <SectionHeading>
          <h2>All users</h2>
          <StatusPill>Demo data</StatusPill>
        </SectionHeading>

        <UsersTable />
      </Panel>
    </PageStack>
  </>
)
