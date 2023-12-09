<template>
    <router-link
        :to="{ name: route }"
        class="
          p-2.5 lg:p-0
          lg:flex lg:items-center lg:justify-center
          lg:w-36 lg:h-12
          text-base font-semibold
          rounded-lg
          transition-opacity duration-300 hover:opacity-50"
        :class="isActive ? 'mx-10 lg:mx-0 bg-primary text-background' : 'text-text'"
    >
      <slot></slot>
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
