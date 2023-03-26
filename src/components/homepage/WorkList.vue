<template>
  <section class="
    lg:grid lg:grid-cols-2
    space-y-7 lg:space-y-0 lg:gap-16
  ">
    <WorkItem url="/">
      <template #title>
        Video Publishing/Sharing Experience
      </template>
    </WorkItem>
    <WorkItem url="/">
      <template #title>
        Video Publishing/Sharing Experience
      </template>
    </WorkItem>
    <WorkItem url="/">
      <template #title>
        Video Publishing/Sharing Experience
      </template>
    </WorkItem>
    <WorkItem url="/">
      <template #title>
        Video Publishing/Sharing Experience
      </template>
    </WorkItem>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkItem from '@/components/WorkItem.vue';

export default defineComponent({
  name: 'WorkList',

  components: {
    WorkItem,
  },
});
</script>
