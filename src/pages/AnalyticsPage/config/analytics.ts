export type EventAnalyticsStatus = 'Completed' | 'Upcoming' | 'Cancelled'

export interface IEventAnalyticsRow {
  id: string
  name: string
  date: string
  registrations: number
  attendees: number
  status: EventAnalyticsStatus
}

export interface IEventTrendPoint {
  month: string
  events: number
  attendees: number
}

export const EVENT_ANALYTICS_ROWS: IEventAnalyticsRow[] = [
  {
    id: 'evt-1',
    name: 'Product Onboarding Webinar',
    date: '2026-01-14',
    registrations: 320,
    attendees: 248,
    status: 'Completed',
  },
  {
    id: 'evt-2',
    name: 'Quarterly Sales Kickoff',
    date: '2026-02-03',
    registrations: 180,
    attendees: 165,
    status: 'Completed',
  },
  {
    id: 'evt-3',
    name: 'CRM Power-User Workshop',
    date: '2026-03-22',
    registrations: 96,
    attendees: 74,
    status: 'Completed',
  },
  {
    id: 'evt-4',
    name: 'Spring Product Launch',
    date: '2026-04-09',
    registrations: 540,
    attendees: 411,
    status: 'Completed',
  },
  {
    id: 'evt-5',
    name: 'Customer Success Roundtable',
    date: '2026-05-18',
    registrations: 64,
    attendees: 0,
    status: 'Cancelled',
  },
  {
    id: 'evt-6',
    name: 'Summer Feature Deep-Dive',
    date: '2026-07-07',
    registrations: 210,
    attendees: 0,
    status: 'Upcoming',
  },
  {
    id: 'evt-7',
    name: 'Partner Integration Demo',
    date: '2026-08-12',
    registrations: 132,
    attendees: 0,
    status: 'Upcoming',
  },
]

export const EVENT_TREND: IEventTrendPoint[] = [
  { month: 'Jan', events: 4, attendees: 248 },
  { month: 'Feb', events: 6, attendees: 165 },
  { month: 'Mar', events: 5, attendees: 74 },
  { month: 'Apr', events: 8, attendees: 411 },
  { month: 'May', events: 3, attendees: 96 },
  { month: 'Jun', events: 7, attendees: 302 },
]
