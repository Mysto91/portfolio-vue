import { Technology } from '@/interfaces/technology';
import { apiClient } from '@/api/apiClient';
import { SearchParams } from '@/interfaces/searchParams';

// eslint-disable-next-line import/prefer-default-export
export async function getTechnologies(params?: SearchParams): Promise<Technology[]> {
  try {
    const { data } = await apiClient.get('/technologies', { params });
    return data;
  } catch (e) {
    return [];
  }
}
