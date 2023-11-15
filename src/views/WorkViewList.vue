<template>
  <div>
    <h1>My works</h1>
    <div class="mt-10">
      <WorkList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkList from '@/components/homepage/WorkList.vue';

export default defineComponent({
  name: 'WorkView',

  components: {
    WorkList,
  },
});
</script>
