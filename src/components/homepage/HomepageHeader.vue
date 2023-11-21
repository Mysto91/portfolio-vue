<template>
  <section>
    <h1>
      Un développeur passionné par la réalisation d'applications web
    </h1>
    <h3 class="my-2.5
          text:xl sm:text-2xl
          leading-[30px] sm:leading-[46px]
          font-extralight text-gray-500"
    >
      Développeur sénior chez Swile. Précédemment Lead développeur chez Orange Business Services.
    </h3>
    <br>
    <ViewProjectLink />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ViewProjectLink from '@/components/ViewProjectLink.vue';

export default defineComponent({
  name: 'HomepageHeader',

  components: {
    ViewProjectLink,
  },
});
</script>
