import { Company } from '@/interfaces/company';
import { UUID } from '@/types/request';
import { ContractType } from '@/enums/contractType';
import { Technology } from '@/interfaces/technology';

export interface Experience {
  uuid: UUID;
  title: string;
  overview: string;
  startDate: string;
  endDate: string | null;
  icon: string;
  description: string;
  company: Company;
  contractType: ContractType;
  technologies: Technology[];
}
