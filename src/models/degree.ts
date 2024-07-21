import { UUID } from '@/types/request';
import { Company } from '@/models/company';

interface Subject {
  id: number,
  name: string;
}

export interface Degree {
  uuid: UUID;
  title: string;
  description: string;
  graduatedDate: string | null;
  company: Company;
  subjects: Subject[];
}
