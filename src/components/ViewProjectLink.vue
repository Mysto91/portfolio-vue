<template>
    <NavigationLink
        :route="Routes.PROJECTLIST"
        class="px-6 py-4 bg-primary !text-background rounded-lg"
    >
        Mes projets
    </NavigationLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Routes } from '@/enums/routes';
import NavigationLink from './NavigationLink.vue';

export default defineComponent({
  name: 'ViewProjectLink',

  components: {
    NavigationLink,
  },

  setup() {
    return {
      Routes,
    };
  },
});
</script>
