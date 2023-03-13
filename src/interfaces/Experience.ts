import { DateTime } from 'luxon';

export interface Experience {
  title: string,
  startDate: DateTime,
  endDate: DateTime | null,
  icon: string,
  content: string,
}
