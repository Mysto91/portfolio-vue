<template>
    <router-link
        :to="{ name: route }"
        class="
          p-2
          flex flex-col lg:flex-row items-center justify-end lg:justify-center
          w-20 sm:w-24 lg:w-32 sm:h-16 lg:h-12
          rounded-lg
          transition-opacity duration-300"
        :class="{ 'bg-primary' : isActive }"
    >
      <span
        v-if="$slots.icon"
        :class="isActive ? 'text-background' : 'text-text'"
      >
        <slot name="icon"></slot>
      </span>

      <span
        class="text-xxs sm:text-xs lg:text-base font-semibold whitespace-nowrap"
        :class="isActive ? 'text-background' : 'text-text'"
      >
        <slot name="title"></slot>
      </span>
    </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Routes } from '@/enums/routes';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'NavigationLink',

  props: {
    route: {
      type: String as PropType<Routes>,
      required: true,
    },
  },

  setup(props) {
    const route = useRoute();
    const isActive = computed<boolean>(() => route.name === props.route);

    return {
      isActive,
    };
  },
});
</script>
