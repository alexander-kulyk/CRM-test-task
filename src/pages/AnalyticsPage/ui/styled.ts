//core
import styled, { css } from 'styled-components'
//other
import type { EventAnalyticsStatus } from '../config'

export const ChartFrame = styled.div`
  height: 320px;
  width: 100%;
`

export const TableScroll = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 640px;
  width: 100%;
`

export const Th = styled.th`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap;
`

export const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gridLine};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  white-space: nowrap;
`

export const Numeric = styled(Td)`
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  text-align: right;
`

const STATUS_TONES = {
  Completed: css`
    background: ${({ theme }) => theme.colors.successBackground};
    color: ${({ theme }) => theme.colors.successText};
  `,
  Upcoming: css`
    background: ${({ theme }) => theme.colors.surfaceMuted};
    color: ${({ theme }) => theme.colors.primary};
  `,
  Cancelled: css`
    background: ${({ theme }) => theme.colors.surfaceMuted};
    color: ${({ theme }) => theme.colors.danger};
  `,
} satisfies Record<EventAnalyticsStatus, ReturnType<typeof css>>

export const StatusBadge = styled.span<{ $status: EventAnalyticsStatus }>`
  border-radius: ${({ theme }) => theme.radii.pill};
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  padding: 4px ${({ theme }) => theme.spacing.md};
  white-space: nowrap;

  ${({ $status }) => STATUS_TONES[$status]}
`
