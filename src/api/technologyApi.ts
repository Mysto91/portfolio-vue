import { Technology } from '@/models/technology';
import { apiClient } from '@/api/apiClient';
import { SearchParams } from '@/interfaces/searchParams';
import { getModelCollection, ModelCollection } from '@/models/model';
import deserializeHydraHttpCollection from '@/deserializers/hydraDeserializer';

// eslint-disable-next-line import/prefer-default-export
export async function getTechnologies(params?: SearchParams): Promise<ModelCollection<Technology>> {
  try {
    const { data } = await apiClient.get('/technologies', { params });
    return deserializeHydraHttpCollection(data);
  } catch (e) {
    return getModelCollection();
  }
}
