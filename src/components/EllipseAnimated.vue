<template>
  <div class="relative animate-spin-slow right-0">
    <EllipseBlurred
      class="absolute -top-40 lg:-top-72 -left-16 lg:-left-32 bg-accent"
      :class="[sizeClasses]"
    />
    <EllipseBlurred
      class="absolute -top-20 lg:-top-36 left-10 lg:left-0 bg-secondary"
      :class="[sizeClasses]"
    />
    <EllipseBlurred
      class="absolute top-0 -left-16 lg:-left-32 bg-accent"
      :class="[sizeClasses]"
    />
    <EllipseBlurred
      class="absolute -top-20 lg:-top-36 -left-40 lg:-left-64 bg-secondary"
      :class="[sizeClasses]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EllipseBlurred from '@/components/EllipseBlurred.vue';

export default defineComponent({
  name: 'EllipseAnimated',

  components: {
    EllipseBlurred,
  },

  setup() {
    return {
      sizeClasses: 'w-40 h-40 md:w-48 md:h-48 lg:w-72 lg:h-72',
    };
  },
});
</script>

<style scoped>
@keyframes spin-slow {
  to {
    transform: rotate(180deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite alternate;
}
</style>
