<template>
    <div
      class="
        w-8 h-8
        rounded-full
        flex items-center justify-center"
      :style="style"
    >
      <div class="
        w-7 h-7
        bg-gray-100 rounded-full
        flex flex-col items-center justify-center"
      >
        <span
          class="text-[8px]"
          :class="{ 'font-bold': count === limit }"
        >
          {{ count }}
        </span>

        <span class="text-[6px]">
          / {{ limit }}
        </span>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Style } from '@/interfaces/style';

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
});

const style = computed<Style>(() => ({
  background: `conic-gradient(#7b7998 ${(props.count * 380) / props.limit}deg, white 0deg)`,
}));
</script>
