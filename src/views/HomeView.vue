<template>
  <div class="flex flex-col items-center">
    <div class="max-w-[1140px] flex space-x-12">
      <img
        src="images/me.jpg"
        class="min-w-[330px] max-w-[420px] rounded-2xl"
        alt="me"
      >
      <div class="max-w-[670px] flex flex-col justify-center">
        <h1 class="py-3 text-7xl font-medium">
          Hi there !
        </h1>
        <p class="text-2xl font-light">
          Fuelled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below.
        </p>
      </div>
    </div>
    <div>
      Section technos et résumé rapide de l'exp
    </div>
    <div>
      Autre section
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>
