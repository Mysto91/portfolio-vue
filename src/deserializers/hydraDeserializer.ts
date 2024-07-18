import { HydraHttpCollection } from '@/api/types/httpHydra';
import { ModelCollection } from '@/models/model';

export default function deserializeHydraHttpCollection<T>(hydraHttpCollection: HydraHttpCollection<T>): ModelCollection<T> {
  return {
    items: hydraHttpCollection['hydra:member'],
  };
}
