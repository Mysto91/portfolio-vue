import { apiClient } from '@/api/apiClient';
import deserializeHydraHttpCollection from '@/deserializers/hydraDeserializer';
import { Degree } from '@/models/degree';
import { getModelCollection, ModelCollection } from '@/models/model';

export async function getDegrees(): Promise<ModelCollection<Degree>> {
  try {
    const { data } = await apiClient.get('/degrees');
    return deserializeHydraHttpCollection(data);
  } catch (e) {
    return getModelCollection();
  }
}
