<template>
  <div class="p-1 text-red-400 text-xs">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
