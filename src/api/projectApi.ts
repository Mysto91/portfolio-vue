import { ProjectItem } from '@/interfaces/projectItem';
import { UUID } from '@/types/request';
import { apiUrl } from '@/api/api';

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const response = await fetch(`${apiUrl}/projects`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getProjectById(projectId: UUID): Promise<ProjectItem | null> {
  try {
    const response = await fetch(`${apiUrl}/projects/${projectId}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
