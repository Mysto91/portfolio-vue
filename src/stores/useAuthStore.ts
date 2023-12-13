import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { DateTime } from 'luxon';

// eslint-disable-next-line import/prefer-default-export
export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null);
  const expirationTime = ref<DateTime | null>(null);

  function setToken(newToken: string | null): void {
    token.value = newToken;
    expirationTime.value = DateTime.now().plus({ minutes: 30 });
  }

  const tokenIsExpired = computed<boolean>(() => {
    if (!expirationTime.value) {
      return false;
    }

    return DateTime.now() > expirationTime.value;
  });

  return {
    setToken,
    token,
    tokenIsExpired,
  };
});
