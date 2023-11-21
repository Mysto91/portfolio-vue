<template>
    <NavigationLink
        :route="route"
        class="flex items-center justify-center"
    >
        <slot></slot>
    </NavigationLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Routes } from '@/enums/routes';
import NavigationLink from '../NavigationLink.vue';

export default defineComponent({
  name: 'NavigationLinkMobile',

  components: {
    NavigationLink,
  },

  props: {
    route: {
      type: String as PropType<Routes>,
      required: true,
    },
  },
});
</script>
