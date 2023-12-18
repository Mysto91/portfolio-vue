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
      <li>
        <AppButtonTag @click="openInNewTab(SocialNetworkUrl.FACEBOOK)">
          <IconFacebook class="h-5 w-5"/>

          <span>
            Facebook
          </span>
        </AppButtonTag>
      </li>

      <li>
        <AppButtonTag @click="openInNewTab(SocialNetworkUrl.LINKEDIN)">
          <IconLinkedin class="h-5 w-5"/>

          <span>
            Linkedin
          </span>
        </AppButtonTag>
      </li>

      <li>
        <AppButtonTag @click="openInNewTab(SocialNetworkUrl.INSTAGRAM)">
          <IconInstagram class="h-5 w-5"/>

          <span>
            Instagram
          </span>
        </AppButtonTag>
      </li>

      <li>
        <AppButtonTag @click="openInNewTab(SocialNetworkUrl.GITHUB)">
          <IconGithub class="h-5 w-5"/>

          <span>
            Github
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
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import AppButtonTag from '@/components/AppButtonTag.vue';
import { SocialNetworkUrl } from '@/constants/socialNetwork';
import { openInNewTab } from '@/utils/window';
import IconMail from '@/components/icons/IconMail.vue';

export default defineComponent({
  name: 'HomepageHeader',

  components: {
    IconMail,
    AppButtonTag,
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconFacebook,
  },

  setup() {
    return {
      SocialNetworkUrl,
      openInNewTab,
    };
  },
});
</script>
