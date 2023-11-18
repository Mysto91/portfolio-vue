import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';

interface Technologies {
  frameworks: Framework[];
  languages: Language[];
}

interface Content {
  overview: string;
  credits?: string;
}

type Funtionality = string;

export interface Workitem {
  id: number;
  title: string;
  description: string;
  technologies: Technologies;
  appUrl: string;
  githubUrl?: string;
  content: Content;
  functionalities: Funtionality[]
}
