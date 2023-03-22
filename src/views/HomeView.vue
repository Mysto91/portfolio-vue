<template>
  <div>
    <div class="w-full h-[680px] flex items-center justify-center">
      <div class="relative w-10 animate-spin-slow">
        <EllipseBlurred
          class="absolute -top-40 lg:-top-72 -left-16 lg:-left-32 bg-red-200"
          :class="[sizeClasses]"
        />
        <EllipseBlurred
          class="absolute -top-20 lg:-top-36 left-10 lg:left-0 bg-purple-300"
          :class="[sizeClasses]"
        />
        <EllipseBlurred
          class="absolute top-0 -left-16 lg:-left-32 bg-cyan-200"
          :class="[sizeClasses]"
        />
        <EllipseBlurred
          class="absolute -top-20 lg:-top-36 -left-40 lg:-left-64 bg-orange-300"
          :class="[sizeClasses]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EllipseBlurred from '@/components/EllipseBlurred.vue';

export default defineComponent({
  name: 'HomeView',

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
