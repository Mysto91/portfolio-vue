<template>
  <a
    href="/"
    class="
    flex flex-col justify-end
    bg-blue-200
    w-full h-[400px] lg:h-[600px]
    rounded-2xl
    drop-shadow-2xl
  ">
    <slot name="image"></slot>
    <span class="
      p-5 sm:px-7 sm:pb-14
      text-white
      text-2xl sm:text-3xl
      sm:leading-7
      bg-blue-300
      rounded-b-2xl
    ">
      <slot name="title"></slot>
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkItem',

  props: {
    url: {
      type: String,
      required: true,
    },
  },
});
</script>
