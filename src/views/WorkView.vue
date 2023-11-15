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
            Le projet a pour but de ...
            Le projet est herbergé sur ..
          </p>
        </div>

        <div class="lg:flex-1">
          <h2>Technologies</h2>

          <div class="space-y-4">
            <h3>Frameworks</h3>

            <ul class="space-y-2.5">
              <li
                v-for="framework in workItem.technologies.frameworks"
                :key="framework"
                class="flex space-x-2"
              >
                <TechnologyIcon :technology="framework"/>

                <span class="flex items-center">
                  {{ framework }}
                </span>
              </li>
            </ul>

            <h3>Languages</h3>

            <ul class="space-y-2.5">
              <li
                v-for="language in workItem.technologies.languages"
                :key="language"
                class="flex space-x-2"
              >
                <TechnologyIcon :technology="language"/>

                <span class="flex items-center">
                  {{ language }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2>Functionalities</h2>

        <ul>
          <li>+ Improve visibility</li>
          <li>+ Allow to centralise all worked done so fare</li>
        </ul>
      </div>

      <div>
        <h2>Credits</h2>

        <ul>
          Thanks to Sebastian Petravic for giving me the inspiration, visit his website : https://www.sebastianpetravic.com/
        </ul>
      </div>

      <div>
        <div>
          <a
            :href="workItem.appUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo app
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
import { Workitem } from '@/interfaces/workitem';
import TechnologyIcon from '@/components/TechnologyIcon.vue';

export default defineComponent({
  name: 'WorkViewList',

  components: {
    TechnologyIcon,
    WorkPhoto,
  },

  setup() {
    const route = useRoute();
    const workItem: Workitem | undefined = getWorkById(Number(route.params.workId));

    return {
      workItem,
      Routes,
    };
  },
});
</script>
