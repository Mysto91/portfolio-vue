<template>
  <div
    class="
      h-16 w-full
      flex
      rounded-2xl shadow focus:shadow-md
      font-light
      transition ease-in-out duration-200"
    :class="isFocused || modelValue ? 'shadow-primary' : 'shadow-secondary'"
  >
    <!-- eslint-disable -->
    <label for="search" class="sr-only"></label>
    <input
      id="search"
      name="search"
      v-model="searchQuery"
      type="text"
      @focus="isFocused = true"
      @focusout="isFocused = false"
      class="flex-grow px-5 h-full text-text focus:outline-none bg-transparent"
      autocomplete="off"
    />
    <span class="mr-5 flex items-center">
      <IconSearch
        class="h-8 w-8 text-blue-400 transition ease-in-out duration-200"
        :class="isFocused || modelValue ? 'text-primary' : 'text-secondary'"
      />
    </span>
    <!-- eslint-enable -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import IconSearch from '@/components/icons/IconSearch.vue';

export default defineComponent({
  name: 'SearchInput',

  components: {
    IconSearch,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const searchQuery = computed<string>({
      get: () => props.modelValue,
      set: (modelValue) => emit('update:modelValue', modelValue),
    });

    const isFocused = ref<boolean>(false);

    return {
      searchQuery,
      isFocused,
    };
  },
});
</script>
