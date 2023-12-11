<template>
  <div class="
     h-24 w-24
     flex flex-col items-center justify-center
     space-y-1
     border border-primary rounded-2xl
     text-text
     hover:bg-primary hover:text-background
     transition ease-in-out duration-200
     cursor-pointer"
  >
      <slot name="icon"></slot>
      <p class="text-sm">
        <slot name="title"></slot>
      </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuItem',
});
</script>
