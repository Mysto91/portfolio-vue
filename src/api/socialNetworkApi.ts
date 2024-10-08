import { apiClient } from '@/api/apiClient';
import deserializeHydraHttpCollection from '@/deserializers/hydraDeserializer';
import { getModelCollection, ModelCollection } from '@/models/model';
import { SocialNetwork } from '@/models/socialNetwork';

export async function getSocialNetworks(): Promise<ModelCollection<SocialNetwork>> {
  try {
    const { data } = await apiClient.get('/social_networks');
    return deserializeHydraHttpCollection(data);
  } catch (e) {
    return getModelCollection();
  }
}
