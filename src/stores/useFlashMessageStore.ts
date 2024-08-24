import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { StatusEnums } from '@/enums/statusEnums';
import { FlashMessage } from '@/interfaces/flashMessageInterface';

interface FlashMessageContextInterface {
  flashMessage: Ref<FlashMessage | null>
  addErrorMessage: (message: string, duration?: number) => void
  addSuccessMessage: (message: string, duration?: number) => void
  clearMessage: () => void
}

// eslint-disable-next-line import/prefer-default-export
export const useFlashMessageStore = defineStore('flash-message-store', (): FlashMessageContextInterface => {
  const flashMessage = ref<FlashMessage | null>(null);

  function setFlashMessage(newMessage: FlashMessage | null): void {
    flashMessage.value = newMessage;
  }

  const defaultDuration = 5000;

  function clearMessageWithDelay(duration: number): void {
    setTimeout(() => {
      setFlashMessage(null);
    }, duration);
  }

  function setTemporaryMessage(message: string, status: StatusEnums, duration = 5000): void {
    setFlashMessage({ status, message });
    clearMessageWithDelay(duration);
  }

  function addErrorMessage(message: string, duration: number = defaultDuration): void {
    setTemporaryMessage(message, StatusEnums.ERROR, duration);
  }

  function addSuccessMessage(message: string, duration: number = defaultDuration): void {
    setTemporaryMessage(message, StatusEnums.SUCCESS, duration);
  }

  return {
    flashMessage,
    addErrorMessage,
    addSuccessMessage,
    clearMessage: () => setFlashMessage(null),
  };
});
