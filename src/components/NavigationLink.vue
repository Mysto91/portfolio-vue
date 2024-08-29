<template>
    <router-link
        :to="{ name: route }"
        class="
          p-2 lg:px-3
          flex flex-col lg:flex-row items-center justify-end lg:justify-center
          w-20 sm:w-24 lg:w-auto sm:h-14
          rounded-lg
          hover:text-primary transition ease-in-out duration-200"
        :class="isActive ? 'text-primary' : 'text-text'"
    >
      <span v-if="$slots.icon">
        <slot name="icon" />
      </span>

      <span
        class="text-xxs sm:text-sm font-semibold whitespace-nowrap">
        <slot name="title" />
      </span>
    </router-link>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Routes } from '@/enums/routes';
import { useRoute } from 'vue-router';

const props = defineProps({
  route: {
    type: String as PropType<Routes>,
    required: true,
  },
});

const router = useRoute();
const isActive = computed<boolean>(() => router.name === props.route);
</script>
