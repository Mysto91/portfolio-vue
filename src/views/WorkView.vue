<template>
  <div>
    <PageTitle title="Calcul cote" />

    <AppParagraph class="flex space-x-5">
      <template #default>
        <p>Side project</p>
        <p>Developer</p>
      </template>
    </AppParagraph>

    <div class="
        h-[820px]
        sm:flex space-y-5 sm:space-x-5 sm:space-y-0"
    >
      <WorkPhoto class="sm:h-full sm:w-1/2">
        <template #default>
          photo1
        </template>
      </WorkPhoto>
      <div class="block sm:w-1/2 space-y-5">
        <WorkPhoto class="sm:h-[400px] ">
          <template #default>
            photo2
          </template>
        </WorkPhoto>
        <WorkPhoto class="sm:h-[400px]">
          <template #default>
            photo3
          </template>
        </WorkPhoto>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from '@/components/PageTitle.vue';
import AppParagraph from '@/components/AppParagraph.vue';
import WorkPhoto from '@/components/work/WorkPhoto.vue';

export default defineComponent({
  name: 'WorkViewList',

  components: {
    WorkPhoto,
    AppParagraph,
    PageTitle,
  },
});
</script>
