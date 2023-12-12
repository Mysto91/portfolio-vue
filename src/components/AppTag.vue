<template>
    <div class="py-1 px-2.5 border border-gray-200 rounded-full text-sm whitespace-nowrap">
      <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTag',
});
</script>
