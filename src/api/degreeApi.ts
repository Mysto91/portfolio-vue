import { apiClient } from '@/api/apiClient';
import { Degree } from '@/interfaces/degree';

// eslint-disable-next-line import/prefer-default-export
export async function getDegrees(): Promise<Degree[]> {
  try {
    const { data } = await apiClient.get('/degrees');
    return data;
  } catch (e) {
    return [];
  }
}
