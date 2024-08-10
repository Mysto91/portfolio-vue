<template>
  <label
    for="message"
    class="text-sm font-medium text-gray-500"
  >
    Votre message
    <textarea
      :id="name"
      :name="name"
      v-model="value"
      class="mt-1 w-full h-36 px-4 py-3 rounded-lg focus-visible:outline-secondary"
      :placeholder="placeholder"
      v-on="validationListeners"
    />

    <AppErrorMessage :message="errorMessage" />
  </label>
</template>

<script setup lang="ts" >
import { defineProps } from 'vue';
import { useInputValidation } from '@/composables/useInputValidation';
import AppErrorMessage from '@/components/AppErrorMessage.vue';

const props = defineProps({
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
});

const { value, validationListeners, errorMessage } = useInputValidation({ name: props.name });
</script>
