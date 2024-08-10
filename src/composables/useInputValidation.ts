import { useField } from 'vee-validate';
import { defineModel, Ref } from 'vue';

export interface InputValidation {
  value: Ref<unknown>
  errorMessage: Ref<string | undefined>
  validationListeners: unknown
}

interface InputValidationParams {
  name: string;
}

export function useInputValidation({ name }: InputValidationParams): InputValidation {
  defineModel<string>({ required: true });

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
    input: (event: InputEvent) => handleChange(event, !!errorMessage.value),
  };

  return {
    value,
    errorMessage,
    validationListeners,
  };
}
