<template>
  <router-link
    :to="{ name: to }"
    class="
        p-4 pl-0
        flex items-center
        text-primary
        group hover:text-text transition ease-in-out"
  >
      <span
        class="
          h-8 w-8
          bg-primary group-hover:bg-text
          rounded-full
          flex items-center justify-center
          animate-bounce-horizontal
          transition ease-in-out"
      >
        <IconLeftArrow class="text-background" />
      </span>

      <span class="ml-2">
        <slot></slot>
      </span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconLeftArrow from '@/components/icons/IconLeftArrow.vue';

export default defineComponent({
  name: 'BackButton',

  components: {
    IconLeftArrow,
  },

  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
@keyframes bounce-horizontal {
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-8px);
  }
}

  .group:hover .animate-bounce-horizontal {
    animation: bounce-horizontal 3s infinite;
  }
</style>
