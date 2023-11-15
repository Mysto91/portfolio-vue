<template>
    <div class="h-56 rounded-2xl border border-black">
      <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkPhoto',
});
</script>
