<template>
    <h1 class="my-2.5
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-[48px] sm:leading-[64px] md:leading-[70px] lg:leading-[90px]
            font-medium"
    >
      {{ title }}
    </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleH1',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
