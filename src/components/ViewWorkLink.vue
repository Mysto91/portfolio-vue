<template>
    <NavigationLink
        url="/work"
        class="px-6 py-4 bg-black text-white rounded-lg"
    >
        View Work
    </NavigationLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationLink from './NavigationLink.vue';

export default defineComponent({
  name: 'ViewWorkLink',

  components: {
    NavigationLink,
  },
});
</script>
