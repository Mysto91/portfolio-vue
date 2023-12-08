import { ref, Ref } from 'vue';

interface Loading {
  isLoading: Ref<boolean>;
  startLoading: () => void;
  stopLoading: () => void;
}

// eslint-disable-next-line import/prefer-default-export
export function useLoading(): Loading {
  const isLoading = ref<boolean>(false);

  function startLoading(): void {
    isLoading.value = true;
  }

  function stopLoading(): void {
    isLoading.value = false;
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}
