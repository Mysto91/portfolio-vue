<template>
    <NavigationLink
        :url="url"
        class="flex items-center justify-center"
    >
        <slot></slot>
    </NavigationLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationLink from '../NavigationLink.vue';

export default defineComponent({
  name: 'NavigationLinkMobile',

  components: {
    NavigationLink,
  },

  props: {
    url: {
      type: String,
      required: true,
    },
  },
});
</script>
