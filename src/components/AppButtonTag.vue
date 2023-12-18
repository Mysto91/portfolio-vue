<template>
  <button>
    <AppTag class="
      py-2
      flex space-x-2
      border-0
      bg-primary text-white text-sm
      hover:bg-text
      transition ease-in-out">
      <slot></slot>
    </AppTag>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppTag from '@/components/AppTag.vue';

export default defineComponent({
  name: 'AppLinkTag',

  components: {
    AppTag,
  },
});
</script>
