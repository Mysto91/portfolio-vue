import { Technology } from '@/interfaces/projectItem';
import { apiUrl } from '@/api/api';

// eslint-disable-next-line import/prefer-default-export
export async function getTechnologies(): Promise<Technology[]> {
  try {
    const response = await fetch(`${apiUrl}/technologies`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
