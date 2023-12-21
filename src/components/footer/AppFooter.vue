<template>
  <div class="
    flex flex-col items-center justify-center
    w-full h-20 md:h-40
    bg-primary"
  >
    <ul class="flex space-x-5">
      <li
        v-for="socialNetwork in socialNetworks"
        :key="`footer-social-network-${socialNetwork.uuid}`"
      >
        <BulletLink :link="socialNetwork.url">
          <SocialNetworkIcon :social-network="socialNetwork.name" />
        </BulletLink>
      </li>
    </ul>

    <p class="hidden md:block mt-5 text-sm text-white font-normal">
      Copyright © 2023 Etienne TRAN. All rights reserved.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BulletLink from '@/components/footer/BulletLink.vue';
import SocialNetworkIcon from '@/components/SocialNetworkIcon.vue';
import { useSocialNetworkStore } from '@/stores/useSocialNetworkStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'AppFooter',

  components: {
    SocialNetworkIcon,
    BulletLink,
  },

  setup() {
    const socialNetworkStore = useSocialNetworkStore();
    const { isLoading, socialNetworks } = storeToRefs(socialNetworkStore);

    return {
      socialNetworks,
      isLoading,
    };
  },
});
</script>
