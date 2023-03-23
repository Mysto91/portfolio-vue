<template>
  <div class="relative">
    <div class="w-full h-[680px] flex items-center justify-center">
      <EllipseAnimated />
    </div>
    <div class="absolute top-0">
      <h1 class="my-2.5
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        leading-[48px] sm:leading-[64px] md:leading-[70px] lg:leading-[90px]
        font-medium">
        A designer passionate about creating beautiful user friendly products
      </h1>
      <h3 class="my-2.5
        text:xl sm:text-2xl
        leading-[30px] sm:leading-[46px]
        font-extralight text-gray-500">
        Senior Product Designer at Linktree. Previously Lead UX/UI Designer at VideoMyJob. Alumni, Y Combinator 2015.
      </h3>
      <br>
      <ViewWorkLink />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EllipseAnimated from '@/components/EllipseAnimated.vue';
import ViewWorkLink from '@/components/ViewWorkLink.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    ViewWorkLink,
    EllipseAnimated,
  },
});
</script>
