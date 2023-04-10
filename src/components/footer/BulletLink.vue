<template>
  <a
    :href="link"
    class="
      relative
      w-10 h-10
      flex items-center justify-center
      border border-gray-300 rounded-full
      fill-white
      ease-in-out duration-300
      group hover:fill-black"
    target="_blank"
  >
    <span class="
      absolute
      w-0 h-0
      rounded-full bg-white
      ease-in-out duration-300
      group-hover:w-full group-hover:h-full"
    >

    </span>
    <span class="relative z-10">
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BulletLink',

  props: {
    link: {
      type: String,
      required: true,
    },
  },
});
</script>
