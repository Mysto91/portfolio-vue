import { ProjectItem } from '@/interfaces/projectItem';
import { UUID } from '@/types/request';

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const response = await fetch(`${process.env.VUE_APP_API_URL}/api/projects`);

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
    const response = await fetch(`${process.env.VUE_APP_API_URL}/api/projects/${projectId}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
