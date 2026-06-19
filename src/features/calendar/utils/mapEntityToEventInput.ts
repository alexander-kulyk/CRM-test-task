import type { EventInput } from '@fullcalendar/core';
import type { CalendarEventEntity } from '../model';

export const mapEntityToEventInput = (
  entity: CalendarEventEntity,
): EventInput => ({
  id: entity.id,
  title: entity.title,
  start: entity.start,
  end: entity.end,
  allDay: entity.allDay,
  backgroundColor: entity.backgroundColor,
  borderColor: entity.borderColor,
});
