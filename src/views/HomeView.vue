<template>
  <div class="relative">
    <div class="
      absolute top-52
      w-1/2
      flex items-center justify-center"
    >
      <EllipseAnimated />
    </div>
    <div class="absolute top-0 pr-7">
      <HomepageHeader class="animate-slide-up" />
      <!--  TODO Afficher un top 4 des projects + voir plus    -->
      <WorkList class="mt-20 sm:mt-40 animate-slide-up" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EllipseAnimated from '@/components/EllipseAnimated.vue';
import HomepageHeader from '@/components/homepage/HomepageHeader.vue';
import WorkList from '@/components/homepage/ProjectList.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    WorkList,
    HomepageHeader,
    EllipseAnimated,
  },
});
</script>
