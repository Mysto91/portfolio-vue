<template>
  <router-link
    :to="url"
    class="
    relative
    flex flex-col justify-end
    w-full h-[300px] lg:h-[400px]
    p-8
    border border-gray-400 rounded-2xl
    bg-primary hover:shadow-2xl
    text-background
    transition ease-in-out duration-300"
  >
    <div>
      <slot name="header"></slot>
    </div>

    <h4 class="
      mt-4
      flex-none
      text-xl sm:text-2xl md:text-3xl
      font-semibold
      sm:leading-7"
    >
      <slot name="title"></slot>
    </h4>

    <p class="
      mt-2
      flex-grow
      text-sm sm:text-base md:text-lg
      text-gray-300"
    >
      <slot name="description"></slot>
    </p>

    <div class="mt-2">
      <slot name="technologies"></slot>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardItem',

  props: {
    url: {
      type: String,
      required: true,
    },
  },
});
</script>
