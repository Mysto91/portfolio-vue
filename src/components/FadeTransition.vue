<template>
  <Transition
    enter-from-class="opacity-0 duration-300 ease-in-out"
    enter-to-class="opacity-1 duration-300 ease-in-out"
    leave-from-class="opacity-1 ease-in-out"
    leave-to-class="opacity-0 ease-in-out"
  >
    <slot></slot>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FadeTransition',
});
</script>
