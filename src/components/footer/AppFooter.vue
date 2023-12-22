<template>
  <footer class="
    flex flex-col items-center justify-center
    w-full h-20 md:h-40
    bg-primary"
  >
    <FadeTransition>
      <ul
        v-if="!isLoading"
        class="flex space-x-5"
      >
        <li
          v-for="socialNetwork in socialNetworks"
          :key="`footer-social-network-${socialNetwork.uuid}`"
        >
          <BulletLink :link="socialNetwork.url">
            <SocialNetworkIcon :social-network="socialNetwork.name" />
          </BulletLink>
        </li>
      </ul>
    </FadeTransition>

    <p class="hidden md:block mt-5 text-sm text-background font-normal">
      Copyright © 2023 Etienne TRAN. All rights reserved.
    </p>

    <p hidden>
      Version : {{ APP_VERSION }}
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BulletLink from '@/components/footer/BulletLink.vue';
import SocialNetworkIcon from '@/components/SocialNetworkIcon.vue';
import { useSocialNetworkStore } from '@/stores/useSocialNetworkStore';
import { storeToRefs } from 'pinia';
import FadeTransition from '@/components/FadeTransition.vue';

export default defineComponent({
  name: 'AppFooter',

  components: {
    FadeTransition,
    SocialNetworkIcon,
    BulletLink,
  },

  setup() {
    const socialNetworkStore = useSocialNetworkStore();
    const { isLoading, socialNetworks } = storeToRefs(socialNetworkStore);

    const APP_VERSION = process.env.VUE_APP_VERSION ?? '';

    return {
      socialNetworks,
      isLoading,
      APP_VERSION,
    };
  },
});
</script>
