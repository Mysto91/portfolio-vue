import { Technology } from '@/models/technology';
import { apiClient } from '@/api/apiClient';
import { SearchParams } from '@/interfaces/searchParams';
import { getModelCollection, ModelCollection } from '@/models/model';
import deserializeHydraHttpCollection from '@/deserializers/hydraDeserializer';

export async function getTechnologies(params?: SearchParams): Promise<ModelCollection<Technology>> {
  try {
    const { data } = await apiClient.get('/technologies', { params });
    return deserializeHydraHttpCollection(data);
  } catch (e) {
    return getModelCollection();
  }
}
