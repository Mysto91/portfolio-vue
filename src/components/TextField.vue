<template>
  <div>
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label
      :for="name"
      class="text-sm font-medium text-gray-500"
    >
      {{ label }}
    </label>

    <component
      ref="inputRef"
      :is="as"
      :id="name"
      type="text"
      v-model="value"
      name="name"
      class="mt-1 w-full h-14 px-4 border-2 rounded-lg focus-visible:outline-secondary flex bg-white text-sm"
      :class="[ errorMessage ? 'border-2 border-red-400' : '', inputClass]"
      :placeholder="placeholder"
      v-on="validationListeners"
      :maxlength="maxLength"
    />

    <div class="flex justify-between">
      <div>
        <AppErrorMessage
          v-if="errorMessage"
          class="flex-1"
          :message="errorMessage"
        />
      </div>

      <AppCounter
        v-if="withCounter"
        class="mt-2"
        :count="valueLength"
        :limit="maxLength"
      />
    </div>

  </div>
</template>

<script setup lang="ts" >
import { computed, defineProps, PropType } from 'vue';
import { useInputValidation } from '@/composables/useInputValidation';
import AppErrorMessage from '@/components/AppErrorMessage.vue';
import AppCounter from '@/components/AppCounter.vue';
import { FieldType } from '@/interfaces/Field';

const props = defineProps({
  as: {
    type: String as PropType<FieldType>,
    default: () => FieldType.INPUT,
  },
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
  inputClass: {
    type: String,
    default: '',
  },
  maxLength: {
    type: Number,
    required: false,
  },
  withCounter: {
    type: Boolean,
    default: null,
  },
});

const {
  value,
  errorMessage,
  validationListeners,
  inputRef,
} = useInputValidation({ name: props.name });

const valueLength = computed<number>(() => value.value?.length ?? 0);
</script>
