import { useField } from 'vee-validate';
import {
  defineModel, ref, Ref, watch,
} from 'vue';

interface InputValidationListeners {
  blur: (event: FocusEvent) => void
  change: (e: Event | unknown, shouldValidate?: boolean) => void
  input: (event: InputEvent) => void
}

export interface InputValidation {
  value: Ref<string | undefined>
  errorMessage: Ref<string | undefined>
  validationListeners: InputValidationListeners
  inputRef: Ref<HTMLInputElement | HTMLTextAreaElement | null>
}

export function useInputValidation({ name }: { name: string }): InputValidation {
  defineModel<string>({ required: true });

  const inputRef = ref<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const {
    value,
    errorMessage,
    handleChange,
    handleBlur,
  } = useField(name, undefined, {
    syncVModel: true,
    validateOnValueUpdate: false,
  });

  const validationListeners = {
    blur: (event: FocusEvent) => handleBlur(event, true),
    change: handleChange,
    // Allow error message reactivity
    input: (event: InputEvent) => handleChange(event, !!errorMessage.value),
  };

  watch(value, () => {
    if (!inputRef.value || value.value !== '') {
      return;
    }

    // Allow to reset field for the dynamic component
    inputRef.value.value = '';
  });

  return {
    value: value as Ref<string>,
    errorMessage,
    validationListeners,
    inputRef,
  };
}
