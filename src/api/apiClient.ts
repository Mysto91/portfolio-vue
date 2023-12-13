import axios from 'axios';
import { useAuthStore } from '@/stores/useAuthStore';
import { login } from '@/api/authApi';
import { storeToRefs } from 'pinia';

// eslint-disable-next-line
export const apiClient = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}/api`,
});

apiClient.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore();
    const { tokenIsExpired, token } = storeToRefs(authStore);

    if (!token.value || tokenIsExpired.value) {
      authStore.setToken(await login());
    }

    if (token.value) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token.value}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
