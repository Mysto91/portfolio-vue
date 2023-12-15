import { Experience } from '@/interfaces/Experience';
import { apiClient } from '@/api/apiClient';
import { SearchParams } from '@/interfaces/searchParams';

// eslint-disable-next-line import/prefer-default-export
export async function getExperiences(params: SearchParams = {}): Promise<Experience[]> {
  try {
    const { data } = await apiClient.get('/experiences', { params });
    return data;
  } catch (e) {
    return [];
  }
}
