<template>
  <p class="
    text-xl sm:text-2xl
    font-light
    leading-8 sm:leading-10"
  >
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppParagraph',

  props: {
    size: {
      type: String,
      default: 's',
    },
  },
});
</script>
