import { authClient } from '@/api/authClient';

// eslint-disable-next-line import/prefer-default-export
export async function login(): Promise<string | null> {
  try {
    const { data } = await authClient.post('/login', {
      email: process.env.VUE_APP_API_EMAIL,
      password: process.env.VUE_APP_API_PASSWORD,
    });

    return data.token;
  } catch (e) {
    console.error(e);
    return null;
  }
}
