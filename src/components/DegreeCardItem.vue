<template>
  <div class="p-4 pt-0 rounded-2xl">
    <h3 class="text-center">
      <slot name="header"></slot>
    </h3>

    <div class="mt-4 text-primary">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DegreeCardItem',
});
</script>
