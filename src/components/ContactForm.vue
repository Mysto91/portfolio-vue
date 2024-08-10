<template>
  <section class="
    px-10 pt-20 pb-14
    lg:flex
    sm:border border-primary rounded-2xl"
  >
    <h3
      class="
      mt-4 mb-5
      text-3xl sm:text-4xl lg:text-6xl
      leading-[46px] sm:leading-[54px] lg:leading-[88px]
      font-medium"
    >
      Vous voulez en savoir plus ?
    </h3>
    <form @submit="onSubmit">
      <div class="md:flex md:space-x-8">
          <AppInput
            id="name"
            class="flex-1"
            label="Nom"
            name="name"
            placeholder="Votre nom"
          />

          <AppInput
            id="email"
            class="flex-1 mt-5 md:mt-0"
            label="Email"
            name="email"
            placeholder="Votre email"
          />

      </div>

      <div class="mt-5">
        <AppTextArea
          id="message"
          label="Votre message"
          name="message"
        />
      </div>

      <div class="w-full flex justify-center lg:justify-start">
        <div v-if="isLoading">envoi...</div>
        <button
          v-else
          type="submit"
          class="btn bg-primary text-background mt-5 w-36 lg:w-28"
          :class="{ 'opacity-50': !meta.valid}"
          :disabled="!meta.valid"
        >
          Envoyer
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';
import { useForm } from 'vee-validate';
import { contactFormSchema } from '@/validators/schemas/contactFormSchema';
import AppTextArea from '@/components/AppTextArea.vue';
import { useMutation } from 'vue-query';
import { sendEmail as apiSendEmail } from '@/api/emailApi';

const { handleSubmit, meta } = useForm({
  validationSchema: contactFormSchema,
});

const { mutate, isLoading } = useMutation({
  mutationFn: apiSendEmail,
  onSuccess: () => {
    console.log('email envoyé');
  },
  onError: () => {
    console.log("Une erreur s'est produite lors de l'envoi du mail");
  },
});

const onSubmit = handleSubmit(({ name, message, email }) => {
  mutate({ name, message, email });
});
</script>
