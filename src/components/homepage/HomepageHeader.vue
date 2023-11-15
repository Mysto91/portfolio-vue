<template>
  <section>
    <h1>A designer passionate about creating beautiful user friendly products" </h1>
    <h3 class="my-2.5
          text:xl sm:text-2xl
          leading-[30px] sm:leading-[46px]
          font-extralight text-gray-500"
    >
      Senior Product Designer at Linktree. Previously Lead UX/UI Designer at VideoMyJob. Alumni, Y Combinator 2015.
    </h3>
    <br>
    <ViewWorkLink />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ViewWorkLink from '@/components/ViewWorkLink.vue';

export default defineComponent({
  name: 'HomepageHeader',

  components: {
    ViewWorkLink,
  },
});
</script>
