import { ProjectItem } from '@/interfaces/projectItem';
import { UUID } from '@/types/request';
import { apiClient } from '@/api/apiClient';
import { SearchParams } from '@/interfaces/searchParams';

export async function getProjects(params: SearchParams = {}): Promise<ProjectItem[]> {
  try {
    const { data } = await apiClient.get('/projects', { params });
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getProjectById(projectId: UUID): Promise<ProjectItem | null> {
  try {
    const { data } = await apiClient.get(`/projects/${projectId}`);
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
