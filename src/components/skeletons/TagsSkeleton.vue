<template>
  <ul class="flex flex-wrap gap-3">
    <li>
      <LineSkeleton class="h-7 w-32" />
    </li>
    <li>
      <LineSkeleton class="h-7 w-52" />
    </li>
    <li>
      <LineSkeleton class="h-7 w-20" />
    </li>
    <li>
      <LineSkeleton class="h-7 w-32" />
    </li>
    <li>
      <LineSkeleton class="h-7 w-16" />
    </li>
    <li>
      <LineSkeleton class="h-7 w-32" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';

export default defineComponent({
  name: 'TagsSkeleton',

  components: {
    LineSkeleton,
  },
});
</script>
