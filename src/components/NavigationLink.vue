<template>
    <router-link
        :to="url"
        class="p-2.5 text-gray-700 text-base font-semibold transition-opacity duration-300 hover:opacity-50"
    >
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationLink',

  props: {
    url: {
      type: String,
      required: true,
    },
  },
});
</script>
