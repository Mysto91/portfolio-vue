<template>
  <div class="relative h-[2000px]">
    <div class="
      absolute top-96
      w-1/2
      flex items-center justify-center"
    >
      <EllipseAnimated />
    </div>
    <div class="absolute top-20 md:top-32 lg:top-44 pr-7">
      <HomepageHeader class="animate-slide-up" />
      <ProjectList class="mt-20 sm:mt-40 animate-slide-up" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EllipseAnimated from '@/components/EllipseAnimated.vue';
import HomepageHeader from '@/components/homepage/HomepageHeader.vue';
import ProjectList from '@/components/homepage/ProjectList.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    ProjectList,
    HomepageHeader,
    EllipseAnimated,
  },
});
</script>
