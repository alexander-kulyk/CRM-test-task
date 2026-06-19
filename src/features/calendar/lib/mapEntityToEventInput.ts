//core
import type { EventInput } from '@fullcalendar/core';
//other
import type { ICalendarEventEntity } from '../model';

export const mapEntityToEventInput = (
  entity: ICalendarEventEntity,
): EventInput => ({
  id: entity.id,
  title: entity.title,
  start: entity.start,
  end: entity.end,
  allDay: entity.allDay,
  backgroundColor: entity.backgroundColor,
  borderColor: entity.borderColor,
});
