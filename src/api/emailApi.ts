import { apiClient } from '@/api/apiClient';
import { ContactForm } from '@/validators/schemas/contactFormSchema';

export async function sendEmail({ name, email, message } : ContactForm): Promise<void> {
  await apiClient.post('/send-email', {
    subject: `Message portfolio de ${name}`,
    fromContact: email,
    content: message,
    to: process.env.VUE_APP_DESTINATION_EMAIL as string,
  }, {
    headers: {
      'Content-Type': 'application/ld+json',
    },
  });
}
