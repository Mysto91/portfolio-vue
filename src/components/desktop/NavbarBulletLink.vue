<template>
  <BulletLink
    class="w-6 h-6 border-0 text-text hover:text-primary"
    :link="link"
  >
    <slot />
  </BulletLink>
</template>

<script setup lang="ts">
import BulletLink from '@/components/footer/BulletLink.vue';

defineProps({
  link: {
    type: String,
    required: true,
  },
});
</script>
