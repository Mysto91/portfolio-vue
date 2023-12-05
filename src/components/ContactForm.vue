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
    <form>
      <div class="md:flex md:space-x-8">
          <AppInput
            class="flex-1"
            label="Nom"
            name="name"
            placeholder="Votre nom"
          />

          <AppInput
            class="flex-1 mt-5 md:mt-0"
            label="Email"
            name="email"
            placeholder="Votre email"
          />

      </div>
      <div class="mt-5">
        <label
          for="message"
          class="text-sm font-medium text-gray-500"
        >
          Votre message
          <textarea
            id="message"
            name="message"
            class="mt-1 w-full h-36 px-4 py-3 rounded-lg focus-visible:outline-secondary"
            placeholder="Votre message"
          />
        </label>
      </div>
      <div class="w-full flex justify-center lg:justify-start">
        <button class="btn bg-primary text-background mt-5 w-36 lg:w-28">
          Envoyer
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppInput from '@/components/AppInput.vue';

export default defineComponent({
  name: 'ContactForm',
  components: { AppInput },
});
</script>
