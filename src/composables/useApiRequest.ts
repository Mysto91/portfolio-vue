import { CacheKey, getCache, setCache } from '@/cache/cacheService';
import { useLoading } from '@/composables/useLoading';
import { Ref, ref } from 'vue';
import { T } from '@/types/template';
import { DateTime } from 'luxon';

interface useApiRequestParams {
  cacheKey?: CacheKey,
  apiCallback: (params?: object) => Promise<T[]>;
}

interface useApiResponseParams {
  isLoading: Ref<boolean>;
  result: Ref<T[] | null>;
  getData: (params?: object) => Promise<void>;
}

// eslint-disable-next-line import/prefer-default-export
export function useApiRequest({ cacheKey, apiCallback }: useApiRequestParams): useApiResponseParams {
  const result = ref<T[] | null>(null);

  const {
    isLoading,
    startLoading,
    stopLoading,
  } = useLoading();

  async function getData(params: object = {}): Promise<void> {
    startLoading();

    if (!cacheKey) {
      result.value = await apiCallback(params);
      stopLoading();

      return;
    }

    const cache = getCache(cacheKey);

    if (cache !== null && cache.expiryTime >= DateTime.now()) {
      result.value = cache.value as T[];
      stopLoading();

      return;
    }

    result.value = await apiCallback(params);

    setCache(cacheKey, result.value);

    stopLoading();
  }

  getData();

  return {
    isLoading,
    result,
    getData,
  };
}
