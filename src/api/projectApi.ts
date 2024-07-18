import { ProjectItem } from '@/models/projectItem';
import { UUID } from '@/types/request';
import { apiClient } from '@/api/apiClient';
import { SearchParams } from '@/interfaces/searchParams';
import { getModelCollection, ModelCollection } from '@/models/model';
import deserializeHydraHttpCollection from '@/deserializers/hydraDeserializer';

export async function getProjects(params: SearchParams = {}): Promise<ModelCollection<ProjectItem>> {
  try {
    const { data } = await apiClient.get('/projects', { params });
    return deserializeHydraHttpCollection(data);
  } catch (e) {
    return getModelCollection();
  }
}

export async function getProjectById(projectId: UUID): Promise<ProjectItem | null> {
  try {
    const { data } = await apiClient.get(`/projects/${projectId}`);
    return data;
  } catch (e) {
    return null;
  }
}
