<template>
    <div class="mr-2.5 mb-2.5 px-2.5 border border-gray-200 rounded-lg text-base leading-10 font-semibold whitespace-nowrap">
        {{ name.toUpperCase() }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTag',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
