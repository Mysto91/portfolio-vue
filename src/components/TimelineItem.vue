<template>
    <div class="ml-2">
        <span class="
          absolute -left-5 md:-left-6
          w-10 h-10 md:w-12 md:h-12
          flex items-center justify-center
          rounded-full  bg-blue-100
          transition ease-in-out duration-200
          hover:scale-150"
        >
            <slot name="icon"></slot>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold">
            <slot name="title"></slot>
            <span
                v-if="isCurrent"
                class="ml-2 bg-black text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
            >
                Current
            </span>
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
            <slot name="date"></slot>
        </time>
        <p class="mb-4 text-base font-normal text-gray-500">
             <slot name="content"></slot>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimelineItem',

  props: {
    isCurrent: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
