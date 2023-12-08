<template>
  <div class="flex flex-col items-center">
    <CircleSkeleton class="h-24 w-24" />

    <LineSkeleton class="mt-4 h-5 w-3/4" />

    <LineSkeleton class="mt-2 h-5 w-2/3" />

    <TagsSkeleton class="mt-5 justify-center" />

    <ul class="mt-4 w-full ml-2 space-y-3">
      <li>
        <LineSkeleton class="h-4 w-2/3 lg:w-56"/>
      </li>
      <li class="!mt-4">
        <LineSkeleton class="h-4 w-full lg:w-96"/>
      </li>
      <li>
        <LineSkeleton class="h-4 w-3/4 lg:w-72"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CircleSkeleton from '@/components/skeletons/CircleSkeleton.vue';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';

export default defineComponent({
  name: 'DegreeCardItemSkeleton',

  components: {
    TagsSkeleton,
    LineSkeleton,
    CircleSkeleton,
  },
});
</script>
