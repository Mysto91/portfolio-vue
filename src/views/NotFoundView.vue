<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex space-x-1 md:space-x-2">
      <h1 class="text-primary">4</h1>

      <span class="flex items-center">
        <IconSad class="
          h-10 sm:h-14 md:h-16 lg:h-20
          w-10 sm:w-14 md:w-16 lg:w-20
          text-primary"
        />
      </span>

      <h1 class="text-primary">4</h1>
    </div>

    <h2 class="text-center text-primary">
      Oops! Cette page n'existe pas!
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconSad from '@/components/icons/IconSad.vue';

export default defineComponent({
  name: 'NotFoundView',

  components: {
    IconSad,
  },
});
</script>
