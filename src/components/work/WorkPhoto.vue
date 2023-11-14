<template>
    <div class="h-56 rounded-2xl border border-blue-700">
      <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkPhoto',
});
</script>
