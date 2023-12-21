<template>
  <section>
    <h1>
      Un développeur passionné par la réalisation d'applications web
    </h1>

    <h3 class="my-2.5
          text:xl sm:text-2xl
          leading-[30px] sm:leading-[46px]
          font-extralight text-text"
    >
      Développeur sénior chez Swile. Précédemment Lead développeur chez Orange Business Services.
    </h3>

    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="socialNetwork in socialNetworks"
        :key="`homepage-${socialNetwork.uuid}`"
      >
        <AppButtonTag @click="openInNewTab(socialNetwork.url)">
          <SocialNetworkIcon :social-network="socialNetwork.name" />

          <span>
            {{ socialNetwork.name }}
          </span>
        </AppButtonTag>
      </li>

      <li>
        <AppButtonTag>
          <IconMail class="h-5 w-5"/>

          <span>
            etiennetran@hotmail.fr
          </span>
        </AppButtonTag>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButtonTag from '@/components/AppButtonTag.vue';
import { openInNewTab } from '@/utils/window';
import IconMail from '@/components/icons/IconMail.vue';
import SocialNetworkIcon from '@/components/SocialNetworkIcon.vue';
import { useSocialNetworkStore } from '@/stores/useSocialNetworkStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'HomepageHeader',

  components: {
    SocialNetworkIcon,
    IconMail,
    AppButtonTag,
  },

  setup() {
    const socialNetworkStore = useSocialNetworkStore();
    const { isLoading, socialNetworks } = storeToRefs(socialNetworkStore);

    return {
      openInNewTab,
      socialNetworks,
      isLoading,
    };
  },
});
</script>
