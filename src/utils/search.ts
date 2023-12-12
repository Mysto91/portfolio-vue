import { Technology } from '@/interfaces/technology';
import { TechnologyType } from '@/enums/technologyType';

export function findTechnologiesByType(technologies: Technology[], technologyType: TechnologyType): Technology[] {
  return technologies.filter((technology) => technology.type === technologyType);
}

export function findFrameworks(technologies: Technology[]): Technology[] {
  return findTechnologiesByType(technologies, TechnologyType.FRAMEWORK);
}

export function findLanguages(technologies: Technology[]): Technology[] {
  return findTechnologiesByType(technologies, TechnologyType.LANGUAGE);
}
