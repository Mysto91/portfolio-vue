<template>
  <section class="
    px-10 pt-20 pb-14
    lg:flex lg:space-x-10
    sm:border border-primary rounded-2xl"
  >
    <h3
      class="
      mt-4 mb-5
      lg:w-2/5
      text-3xl sm:text-4xl lg:text-5xl
      leading-[46px] sm:leading-[54px] lg:leading-[88px]
      font-medium"
    >
      Vous voulez en savoir plus ?
    </h3>

    <form @submit="onSubmit" class="flex-grow">
      <div class="md:flex md:space-x-8">
          <TextField
            class="flex-1"
            label="Prénom"
            name="name"
            placeholder="John"
          />

          <TextField
            class="flex-1 mt-5 md:mt-0"
            label="Email"
            name="email"
            placeholder="john-smith@gmail.com"
          />
      </div>

      <div class="mt-5">
        <TextField
          :as="FieldType.TEXTAREA"
          input-class="py-4 min-h-52 max-h-80"
          label="Votre message"
          name="message"
          placeholder="Que souhaitez-vous me partager ?"
          :max-length="500"
          with-counter
        />
      </div>

      <div class="w-full flex justify-center">
        <button
          type="submit"
          class="btn bg-primary text-background mt-2 flex space-x-2"
          :class="{'opacity-50 cursor-not-allowed': disableSendButton}"
          :disabled="disableSendButton"
        >
          <template v-if="isLoading">
            <AppSpinner />
            <span>Envoi...</span>
          </template>

          <template v-else>
            Envoyer
          </template>
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { contactFormSchema } from '@/validators/schemas/contactFormSchema';
import { useMutation } from 'vue-query';
import { sendEmail as apiSendEmail } from '@/api/emailApi';
import TextField from '@/components/TextField.vue';
import { FieldType } from '@/interfaces/Field';
import { computed } from 'vue';
import AppSpinner from '@/components/AppSpinner.vue';

const { handleSubmit, meta, resetForm } = useForm({
  validationSchema: contactFormSchema,
});

const { mutate: sendEmail, isLoading } = useMutation({
  mutationFn: apiSendEmail,
  onSuccess: () => {
    resetForm({
      values: {
        email: '',
        name: '',
        message: '',
      },
    });
  },
  onError: () => {
    console.error("Une erreur s'est produite lors de l'envoi du mail");
  },
});

const onSubmit = handleSubmit(({ name, message, email }) => sendEmail({ name, message, email }));

const disableSendButton = computed<boolean>(() => !meta.value.valid || isLoading.value);
</script>
