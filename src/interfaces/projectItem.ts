import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';
import { TechnologyType } from '@/enums/technologyType';

export interface Technology {
  id: number;
  name: Framework | Language;
  type: TechnologyType;
  url: string;
}

interface Content {
  overview: string;
  credits?: string;
}

interface Funtionality {
  id: number;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  appUrl: string;
  githubUrl?: string;
  content: Content;
  functionalities: Funtionality[];
  overview: string;
}
