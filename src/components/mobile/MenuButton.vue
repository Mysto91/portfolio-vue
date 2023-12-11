<template>
    <button class="w-full h-full flex items-center justify-center">
      <IconHamburger class="h-8 w-8 sm:h-12 md:w-12" />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconHamburger from '@/components/icons/IconHamburger.vue';

export default defineComponent({
  name: 'MenuButton',

  components: {
    IconHamburger,
  },
});
</script>
