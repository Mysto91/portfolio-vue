import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SocialNetwork } from '@/interfaces/socialNetwork';
import { useLoading } from '@/composables/useLoading';
import { getSocialNetworks } from '@/api/socialNetworkApi';

// eslint-disable-next-line import/prefer-default-export
export const useSocialNetworkStore = defineStore('socialNetwork', () => {
  const socialNetworks = ref<SocialNetwork[] | null>(null);
  const { isLoading, startLoading, stopLoading } = useLoading();

  async function fetchSocialNetworks(): Promise<void> {
    startLoading();
    socialNetworks.value = await getSocialNetworks();
    stopLoading();
  }

  fetchSocialNetworks();

  return {
    socialNetworks,
    isLoading,
  };
});
