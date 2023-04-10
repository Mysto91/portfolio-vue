<template>
  <div class="
    fixed md:relative
    bottom-0
    flex items-center justify-center
    w-full h-20 md:h-40
    bg-blue-300"
  >
    <ul class="flex space-x-5">
      <li>
        <span class="
          w-10 h-10
          flex items-center justify-center
          border border-gray-300 rounded-full"
        >
          a
        </span>
      </li>
      <li>
        <span class="
          w-10 h-10
          flex items-center justify-center
          border border-gray-300 rounded-full"
        >
          b
        </span>
      </li>
      <li>
        <span class="
          w-10 h-10
          flex items-center justify-center
          border border-gray-300 rounded-full"
        >
          c
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
});
</script>
