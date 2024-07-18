import { Company } from '@/models/company';
import { UUID } from '@/types/request';
import { ContractType } from '@/enums/contractType';
import { Technology } from '@/models/technology';

export interface ExperienceTechnology extends Technology{
  showInOverview: boolean;
}

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
  technologies: ExperienceTechnology[];
}
