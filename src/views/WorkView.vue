<template>
  <div>
    <h1
      class="
        mt-2.5
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        leading-[48px] sm:leading-[64px] md:leading-[70px] lg:leading-[90px]
        text-black font-semibold
      "
    >
      Video Publishing/ Sharing Experience
    </h1>
    <div
      class="
        mt-2.5
        flex flex-col sm:flex-row
        space-x-0 sm:space-x-5
        text-xl leading-8 text-black font-light
       "
    >
      <p>
        VideoMyJob
      </p>
      <p>
        UI/UX Design
      </p>
    </div>
    <div
      class="
        mt-2.5 sm:mt-20 lg:mt-28
        md:flex
        space-y-7 md:space-x-7 md:space-y-0
      "
    >
      <WorkItem
        class="lg:h-[420px]"
        url="/"
      />
      <WorkItem
        class="lg:h-[420px]"
        url="/"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkItem from '@/components/WorkItem.vue';

export default defineComponent({
  name: 'WorkView',

  components: {
    WorkItem,
  },
});
</script>
