<template>
  <ul class="
      lg:grid lg:grid-cols-2
      space-y-7 lg:space-y-0 lg:gap-16"
  >
    <li
      v-for="index in 4"
      :key="`skeleton-${index}`"
      class="flex justify-center"
    >
      <ImageSkeleton class="h-[400px] rounded-2xl drop-shadow-2xl" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageSkeleton from '@/components/skeletons/ImageSkeleton.vue';

export default defineComponent({
  name: 'ProjectListSkeleton',

  components: {
    ImageSkeleton,
  },
});
</script>
