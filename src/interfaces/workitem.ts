import { Technology } from '@/enums/technology';

export interface Workitem {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: Technology[];
  appUrl: string;
  githubUrl: string;
}
