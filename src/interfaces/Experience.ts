import { Company } from '@/interfaces/company';
import { UUID } from '@/types/request';

export interface Experience {
  uuid: UUID;
  title: string,
  overview: string,
  startDate: string,
  endDate: string | null,
  icon: string,
  description: string,
  company: Company
}
