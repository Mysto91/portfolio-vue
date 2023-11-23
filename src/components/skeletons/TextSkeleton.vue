<template>
  <ul role="status" class="max-w-sm animate-pulse space-y-3">
    <li
      v-for="(line, index) in Array(numberOfLines).fill(null)"
      :key="`skeleton-${index}`"
    >
      <div class="h-2 bg-gray-300 rounded-full max-w-[360px]"></div>
    </li>

    <li class="sr-only">Loading...</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextSkeleton',

  props: {
    numberOfLines: {
      type: Number,
      default: 3,
    },
  },
});
</script>
