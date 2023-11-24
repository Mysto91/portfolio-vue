<template>
  <div class="w-full flex">
    <CircleSkeleton :size="Size.M" class="flex-none" />
    <ul class="w-full ml-2 space-y-3">
      <li>
        <LineSkeleton class="h-4 w-full md:w-96"/>
      </li>
      <li>
        <LineSkeleton class="h-2 w-2/3 md:w-56"/>
      </li>
      <li class="!mt-4">
        <LineSkeleton class="h-2 w-full md:w-96"/>
      </li>
      <li>
        <LineSkeleton class="h-2 w-3/4 md:w-72"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CircleSkeleton from '@/components/skeletons/CircleSkeleton.vue';
import { Size } from '@/enums/size';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';

export default defineComponent({
  name: 'TimeLineSkeleton',

  components: {
    LineSkeleton,
    CircleSkeleton,
  },

  setup() {
    return {
      Size,
    };
  },
});
</script>
