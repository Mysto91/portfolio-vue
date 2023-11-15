import { Experience } from '@/interfaces/Experience';
import { Experiences } from '@/constants/experiences';

// eslint-disable-next-line import/prefer-default-export
export function getAllExperiences(): Experience[] {
  return Experiences;
}
