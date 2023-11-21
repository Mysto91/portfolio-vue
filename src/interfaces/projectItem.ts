import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';
import { TechnologyType } from '@/enums/technologyType';
import { Url, UUID } from '@/types/request';

export interface Technology {
  id: number;
  name: Framework | Language;
  type: TechnologyType;
  url: Url;
}

interface Funtionality {
  id: number;
  description: string;
}

export interface ProjectItem {
  uuid: UUID;
  title: string;
  description: string;
  technologies: Technology[];
  appUrl: Url;
  githubUrl?: Url;
  credits: string | null;
  functionalities: Funtionality[];
  overview: string;
}
