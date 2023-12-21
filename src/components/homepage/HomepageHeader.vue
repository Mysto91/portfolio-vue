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

    <FadeTransition class="mt-4">
      <TagsSkeleton v-if="isLoading" />

      <ul
        v-else-if="socialNetworks.length"
        class="flex flex-wrap gap-2"
      >
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

      <NoData v-else/>
    </FadeTransition>
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
import NoData from '@/components/NoData.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';

export default defineComponent({
  name: 'HomepageHeader',

  components: {
    TagsSkeleton,
    FadeTransition,
    NoData,
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
