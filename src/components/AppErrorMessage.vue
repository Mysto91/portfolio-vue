<template>
  <div v-if="message" class="text-red-400">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';

defineProps({
  message: {
    type: String as PropType<string | undefined>,
    required: true,
  },
});
</script>
