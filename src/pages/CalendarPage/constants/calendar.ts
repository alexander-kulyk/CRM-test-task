import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import type { ICrmCalendarEvent } from '../../../shared/types/calendar';
import { getDateWithOffset } from '../utils';

export const CALENDAR_PLUGINS = [
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
];

export const CALENDAR_HEADER_TOOLBAR = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay',
};

export const NEW_EVENT_TITLE = 'New CRM activity';

export const createInitialEvents = (): ICrmCalendarEvent[] => [
  {
    id: 'event-1',
    title: 'Client discovery call',
    start: getDateWithOffset(1),
    allDay: true,
  },
  {
    id: 'event-2',
    title: 'Product demo',
    start: `${getDateWithOffset(3)}T10:00:00`,
    end: `${getDateWithOffset(3)}T11:00:00`,
  },
  {
    id: 'event-3',
    title: 'Follow-up email',
    start: getDateWithOffset(5),
    allDay: true,
  },
];
