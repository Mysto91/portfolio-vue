<template>
  <div class="relative h-[2000px]">
    <div class="
      absolute top-48 lg:top-96
      w-1/2
      flex items-center justify-center"
    >
      <EllipseAnimated />
    </div>
    <div class="absolute top-16 sm:top-20 lg:top-44 pr-7">
      <HomepageHeader class="animate-slide-up h-[100vh] sm:h-screen lg:h-[85vh]" />
      <ProjectList class="animate-slide-up" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EllipseAnimated from '@/components/EllipseAnimated.vue';
import HomepageHeader from '@/components/homepage/HomepageHeader.vue';
import ProjectList from '@/components/homepage/ProjectList.vue';
</script>
