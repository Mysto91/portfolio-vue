import { Experience } from '@/models/experience';
import { apiClient } from '@/api/apiClient';
import { SearchParams } from '@/interfaces/searchParams';
import { getModelCollection, ModelCollection } from '@/models/model';
import deserializeHydraHttpCollection from '@/deserializers/hydraDeserializer';

// eslint-disable-next-line import/prefer-default-export
export async function getExperiences(params: SearchParams = {}): Promise<ModelCollection<Experience>> {
  try {
    const { data } = await apiClient.get('/experiences', { params });
    return deserializeHydraHttpCollection(data);
  } catch (e) {
    return getModelCollection();
  }
}
