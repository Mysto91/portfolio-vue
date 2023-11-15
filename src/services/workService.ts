import { Workitem } from '@/interfaces/workitem';
import { Works } from '@/constants/works';

export function getAllWorks(): Workitem[] {
  return Works;
}

export function getWorkById(workId: number): Workitem | undefined {
  return Works.find((work) => work.id === workId);
}
