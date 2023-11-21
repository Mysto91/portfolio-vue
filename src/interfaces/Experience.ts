import { DateTime } from 'luxon';
import { Url } from '@/types/request';

export interface Experience {
  title: string,
  startDate: DateTime,
  endDate: DateTime | null,
  icon: string,
  content: string,
  class?: string,
  companyUrl: Url
}
