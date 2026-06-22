//core
import styled from 'styled-components'
//components
import { Panel } from '../../../../shared/ui'

export const CalendarPanel = styled(Panel)`
  overflow-x: auto;

  .fc {
    --fc-border-color: ${({ theme }) => theme.colors.gridLine};
    --fc-button-bg-color: ${({ theme }) => theme.colors.surface};
    --fc-button-border-color: ${({ theme }) => theme.colors.border};
    --fc-button-text-color: ${({ theme }) => theme.colors.text};
    --fc-button-hover-bg-color: ${({ theme }) => theme.colors.surfaceMuted};
    --fc-button-hover-border-color: ${({ theme }) => theme.colors.border};
    --fc-button-active-bg-color: ${({ theme }) => theme.colors.surface};
    --fc-button-active-border-color: ${({ theme }) => theme.colors.border};
    --fc-event-bg-color: ${({ theme }) => theme.colors.primary};
    --fc-event-border-color: ${({ theme }) => theme.colors.primary};
    --fc-today-bg-color: rgba(163, 160, 251, 0.1);
    color: ${({ theme }) => theme.colors.text};
    min-width: 760px;
  }

  .fc-toolbar {
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  .fc-toolbar-title {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }

  .fc-button {
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) => theme.shadows.panel};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    padding: 8px 18px;
    text-transform: capitalize;
  }

  .fc-button:focus,
  .fc-button-primary:focus,
  .fc-button-primary:not(:disabled).fc-button-active:focus,
  .fc-button-primary:not(:disabled):active:focus {
    box-shadow: none;
    outline: none;
  }

  .fc-button-primary:not(:disabled).fc-button-active,
  .fc-button-primary:not(:disabled):active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .fc-col-header-cell {
    background: ${({ theme }) => theme.colors.surfaceMuted};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    text-transform: uppercase;
  }

  .fc-daygrid-day {
    cursor: pointer;
  }

  .fc-daygrid-day-number {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    padding: ${({ theme }) => theme.spacing.lg};
  }

  .fc-event {
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: 0 4px 10px rgba(59, 134, 255, 0.22);
    cursor: default;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    padding: 4px 8px;
  }

  .fc-event.fc-event-dragging,
  .fc-event:active {
    cursor: grabbing;
  }
`
