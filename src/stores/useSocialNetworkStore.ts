import { defineStore } from 'pinia';
import { computed } from 'vue';
import { SocialNetwork } from '@/models/socialNetwork';
import { getSocialNetworks } from '@/api/socialNetworkApi';
import { useQuery } from 'vue-query';
import { CacheKey } from '@/cache/cacheService';

// eslint-disable-next-line import/prefer-default-export
export const useSocialNetworkStore = defineStore('socialNetwork', () => {
  const { data, isLoading } = useQuery({
    queryKey: [CacheKey.SOCIAL_NETWORKS],
    queryFn: () => getSocialNetworks(),
  });

  const socialNetworks = computed<SocialNetwork[] | null>(() => data.value?.items ?? null);

  return {
    socialNetworks,
    isLoading,
  };
});
