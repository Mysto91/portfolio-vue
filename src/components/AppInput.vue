<template>
  <label
    :for="name"
    class="text-sm font-medium text-gray-500"
  >
    {{ label }}
    <input
      type="text"
      :id="name"
      name="name"
      class="mt-1 w-full h-14 px-4 rounded-lg focus-visible:outline-secondary"
      :placeholder="placeholder"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInput',

  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
});
</script>
