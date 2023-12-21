<template>
  <div class="mt-5 space-y-10">
    <LineSkeleton class="h-10 max-w-md"/>

    <div class="
        lg:h-[820px]
        lg:flex space-y-5 lg:space-x-5 lg:space-y-0"
    >
      <ImageSkeleton class="lg:h-full lg:w-1/2" />

      <div class="block lg:w-1/2 space-y-5">
        <ImageSkeleton class="lg:h-[400px]" />
        <ImageSkeleton class="lg:h-[400px]" />
      </div>
    </div>

    <div class="grid grid-cols-2 space-x-5">
      <div>
        <LineSkeleton class="h-8 max-w-md" />

        <div class="mt-5 space-y-2">
          <LineSkeleton class="h-3 max-w-md" />
          <LineSkeleton class="h-3 max-w-sm" />
          <LineSkeleton class="h-3 max-w-lg" />
          <LineSkeleton class="h-3 max-w-md" />
        </div>
      </div>

      <div>
        <LineSkeleton class="h-8 max-w-md"/>
        <TagsSkeleton class="mt-5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageSkeleton from '@/components/skeletons/ImageSkeleton.vue';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';

export default defineComponent({
  name: 'ProjectSkeleton',

  components: {
    TagsSkeleton,
    LineSkeleton,
    ImageSkeleton,
  },
});
</script>
