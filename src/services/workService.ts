import { ProjectItem } from '@/interfaces/projectItem';
import { Works } from '@/constants/works';

export function getAllWorks(): ProjectItem[] {
  return Works;
}

export function getWorkById(workId: number): ProjectItem | undefined {
  return Works.find((work) => work.id === workId);
}
