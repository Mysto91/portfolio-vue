import { apiClient } from '@/api/apiClient';
import { SocialNetwork } from '@/interfaces/socialNetwork';

// eslint-disable-next-line import/prefer-default-export
export async function getSocialNetworks(): Promise<SocialNetwork[]> {
  try {
    const { data } = await apiClient.get('/social-networks');
    return data;
  } catch (e) {
    return [];
  }
}
