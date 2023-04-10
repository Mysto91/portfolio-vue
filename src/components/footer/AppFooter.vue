<template>
  <div class="
    fixed md:relative
    bottom-0
    flex flex-col items-center justify-center
    w-full h-20 md:h-40
    bg-blue-300"
  >
    <ul class="flex space-x-5">
      <li>
        <BulletLink link="https://www.facebook.com/etienne.tran.77">
          <IconFacebook />
        </BulletLink>
      </li>
      <li>
        <BulletLink link="https://www.linkedin.com/in/etienne-tran/">
          <IconLinkedin />
        </BulletLink>
      </li>
      <li>
        <BulletLink link="https://www.instagram.com/etienne_sushi91/">
          <IconInstagram />
        </BulletLink>
      </li>
      <li>
        <BulletLink link="https://github.com/Mysto91">
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

export default defineComponent({
  name: 'AppFooter',

  components: {
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconFacebook,
    BulletLink,
  },
});
</script>
