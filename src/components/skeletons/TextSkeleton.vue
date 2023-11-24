<template>
  <ul class="max-w-sm animate-pulse space-y-3">
    <li
      v-for="index in numberOfLines"
      :key="`skeleton-${index}`"
    >
      <LineSkeleton class="h-3" />
    </li>

    <li class="sr-only">Loading...</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';

export default defineComponent({
  name: 'TextSkeleton',

  components: {
    LineSkeleton,
  },

  props: {
    numberOfLines: {
      type: Number,
      default: 3,
    },
  },
});
</script>
