import { CacheKey, getCache, setCache } from '@/cache/cacheService';
import { useLoading } from '@/composables/useLoading';
import { Ref, ref } from 'vue';
import { T } from '@/types/template';

interface useApiRequestParams {
  cacheKey: CacheKey,
  apiCallback: () => Promise<T[]>;
}

interface useApiResponseParams {
  isLoading: Ref<boolean>;
  result: Ref<T[] | null>;
}

// eslint-disable-next-line import/prefer-default-export
export function useApiRequest({ cacheKey, apiCallback }: useApiRequestParams): useApiResponseParams {
  const result = ref<T[] | null>(null);

  const {
    isLoading,
    startLoading,
    stopLoading,
  } = useLoading();

  async function getData(): Promise<void> {
    startLoading();

    const cacheResult = getCache(cacheKey);

    if (cacheResult !== null) {
      result.value = cacheResult as T[];
      stopLoading();

      return;
    }

    result.value = await apiCallback();

    setCache(cacheKey, result.value);

    stopLoading();
  }

  getData();

  return {
    isLoading,
    result,
  };
}
