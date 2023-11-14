<template>
  <div>
    <router-link :to="{ name: Routes.WORKLIST }">
      Back to works
    </router-link>

    <div
      v-if="workItem"
      class="space-y-10"
    >
      <div>
        <h1>{{ workItem.title }}</h1>

        <p class="flex space-x-5">
            <span>Side project</span>
            <span>Developer</span>
        </p>
      </div>

      <div class="
        lg:h-[820px]
        lg:flex space-y-5 lg:space-x-5 lg:space-y-0"
      >
        <WorkPhoto class="lg:h-full lg:w-1/2">
          <template #default>
            photo1
          </template>
        </WorkPhoto>
        <div class="block lg:w-1/2 space-y-5">
          <WorkPhoto class="lg:h-[400px] ">
            <template #default>
              photo2
            </template>
          </WorkPhoto>
          <WorkPhoto class="lg:h-[400px]">
            <template #default>
              photo3
            </template>
          </WorkPhoto>
        </div>
      </div>

      <div class="lg:flex space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
        <div class="lg:flex-1">
          <h2>Project Overview</h2>
          <p>
            Publishing and sharing videos is a core part of the video creation journey within VideoMyJob.
            Videos created by users need to be shared with others in order for them to experience the core value of the product.
            Through user interviews, we were able to uncover several problems with this part of the video creation journey.
            It was my task to design an improved video sharing experience.
          </p>
        </div>

        <div class="lg:flex-1">
          <h2>Technologies</h2>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <a
            :href="workItem.appUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            View app
          </a>
        </div>
        <div>
          <a
            :href="workItem.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            View github project
          </a>
        </div>
      </div>
    </div>

    <div v-else>
      Work not found
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkPhoto from '@/components/work/WorkPhoto.vue';
import { useRoute } from 'vue-router';
import { getWorkById } from '@/services/workService';
import { Routes } from '@/constants/routes';

export default defineComponent({
  name: 'WorkViewList',

  components: {
    WorkPhoto,
  },

  setup() {
    const route = useRoute();
    const workItem = getWorkById(Number(route.params.workId));

    return {
      workItem,
      Routes,
    };
  },
});
</script>
