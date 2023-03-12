<template>
  <div class="flex flex-col items-center">
    <div class="w-full flex space-x-12">
        <img
          src="images/me.jpg"
          class="flex-initial w-[330px] rounded-2xl"
          alt="me"
        >
        <div class="flex-initial w-[670px] flex flex-col justify-center">
          <h1 class="py-3 text-7xl font-medium leading-[90px]">
            Hi there !
          </h1>
          <p class="text-2xl font-light leading-10">
            Fuelled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below.
          </p>
        </div>
      </div>
    <div class="mt-36 w-full flex space-x-12">
      <div class="flex-initial w-[600px]">
        <h1 class="my-5 text-5xl leading-[62px] font-medium">
          My Career So Far
        </h1>
        <p class="pr-14 text-xl leading-8 font-light">
          Always up for a challenge, I have worked for lean start-ups and was a member of the first New Zealand start-up to attend Y Combinator, the largest start-up accelerator in the world. From there, I worked my way up to Art Director and Team Lead at Appster where I oversaw the design of 30+ mobile and desktop apps. Currently I am a Senior Product Designer at Linktree leading design for the Linktree mobile app
        </p>
      </div>
      <div class="flex-initial w-[440px] flex items-center">
        <div class="flex flex-wrap">
          <AppTag
            v-for="(tag, index) in tags"
            v-bind:key="index"
            :name="tag"
          />
        </div>
      </div>
    </div>
    <div>
      Autre section
    </div>
  </div>
</template>

<script lang="ts">
import AppTag from '@/components/AppTag.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    AppTag,
  },

  setup() {
    const tags: string[] = [
      'ui design',
      'ux-design',
      'prototyping',
      'branding',
      'html/css',
      'wireframing',
      'information architecture',
      'user search',
      'user interviews',
      'leadership',
      'figma',
      'adobe suite',
    ];

    return {
      tags,
    };
  },
});
</script>
