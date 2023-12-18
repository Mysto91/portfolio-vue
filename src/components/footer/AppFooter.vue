<template>
  <div class="
    flex flex-col items-center justify-center
    w-full h-20 md:h-40
    bg-primary"
  >
    <ul class="flex space-x-5">
      <li>
        <BulletLink :link="SocialNetworkUrl.FACEBOOK">
          <IconFacebook />
        </BulletLink>
      </li>

      <li>
        <BulletLink :link="SocialNetworkUrl.LINKEDIN">
          <IconLinkedin />
        </BulletLink>
      </li>

      <li>
        <BulletLink :link="SocialNetworkUrl.INSTAGRAM">
          <IconInstagram />
        </BulletLink>
      </li>

      <li>
        <BulletLink :link="SocialNetworkUrl.GITHUB">
          <IconGithub />
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
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import { SocialNetworkUrl } from '@/constants/socialNetwork';

export default defineComponent({
  name: 'AppFooter',

  components: {
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconFacebook,
    BulletLink,
  },

  setup() {
    return {
      SocialNetworkUrl,
    };
  },
});
</script>
