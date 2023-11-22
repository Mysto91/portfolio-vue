import { Experience } from '@/interfaces/Experience';
import { apiUrl } from '@/api/api';

// eslint-disable-next-line import/prefer-default-export
export async function getExperiences(): Promise<Experience[]> {
  try {
    const response = await fetch(`${apiUrl}/experiences`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
