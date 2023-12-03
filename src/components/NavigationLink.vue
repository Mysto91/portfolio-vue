<template>
    <router-link
        :to="{ name: route }"
        class="p-2.5 text-text text-base font-semibold transition-opacity duration-300 hover:opacity-50"
    >
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Routes } from '@/enums/routes';

export default defineComponent({
  name: 'NavigationLink',

  props: {
    route: {
      type: String as PropType<Routes>,
      required: true,
    },
  },
});
</script>
