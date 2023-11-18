import { ProjectItem } from '@/interfaces/projectItem';

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const response = await fetch(`${process.env.VUE_APP_API_URL}/projects`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getProjectById(projectId: number): Promise<ProjectItem | null> {
  try {
    const response = await fetch(`${process.env.VUE_APP_API_URL}/projects/${projectId}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
