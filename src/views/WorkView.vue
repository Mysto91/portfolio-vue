<template>
  <div>
    <router-link
      :to="{ name: Routes.WORKLIST }"
      class="btn w-64 flex justify-center items-center"
    >
      <IconLeftArrow class="fill-white" />

      <span class="ml-2">
        Retour vers les projets
      </span>
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
        <WorkImage image-url="https://upload.wikimedia.org/wikipedia/en/c/cb/Earthlights02_dmsp_big.jpg" class="lg:h-full lg:w-1/2" />

        <div class="block lg:w-1/2 space-y-5">
          <WorkImage image-url="https://upload.wikimedia.org/wikipedia/en/c/cb/Earthlights02_dmsp_big.jpg" class="lg:h-[400px] " />

          <WorkImage image-url="https://upload.wikimedia.org/wikipedia/en/c/cb/Earthlights02_dmsp_big.jpg" class="lg:h-[400px]" />
        </div>
      </div>

      <div class="lg:flex space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
        <div class="lg:flex-1">
          <h2>Présentation</h2>

          <p>
            {{ workItem.content.overview }}
          </p>
        </div>

        <div>
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

            <h3>Langages</h3>

            <ul class="space-y-2.5">
              <li
                v-for="(language, index) in workItem.technologies.languages"
                :key="index"
                class="flex"
              >
                <TechnologyIcon :technology="language"/>

                <span class="ml-2 flex items-center">
                  {{ language }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2>Fonctionalités</h2>

        <ul class="space-y-2.5">
          <li
            v-for="(functionality, index) in workItem.functionalities"
            :key="index"
            class="flex"
          >
            <IconRocket />

            <span class="flex items-center ml-2">
              {{ functionality }}
            </span>
          </li>
        </ul>
      </div>

      <div v-if="workItem.content.credits">
        <h2>Remerciements</h2>

        <p>
          {{ workItem.content.credits }}
        </p>
      </div>

      <div>
        <h2>En voir davantage</h2>

        <div class="lg:flex lg:space-x-10 space-y-10 lg:space-y-0">
          <a
            :href="workItem.appUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn flex"
          >
            <span class="flex items-center">
              <IconPlay class="fill-white"/>
            </span>

            <span class="ml-2 flex items-center">
              Voir l'application
            </span>
          </a>
          <a
            :href="workItem.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn flex"
          >
            <span class="flex items-center">
              <IconGithub class="fill-white" />
            </span>

            <span class="ml-2">
              Voir le github
            </span>
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
import WorkImage from '@/components/work/WorkImage.vue';
import { useRoute } from 'vue-router';
import { getWorkById } from '@/services/workService';
import { Routes } from '@/constants/routes';
import { Workitem } from '@/interfaces/workitem';
import TechnologyIcon from '@/components/TechnologyIcon.vue';
import IconRocket from '@/components/icons/IconRocket.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconPlay from '@/components/icons/IconPlay.vue';
import IconLeftArrow from '@/components/icons/IconLeftArrow.vue';

export default defineComponent({
  name: 'WorkViewList',

  components: {
    IconLeftArrow,
    IconPlay,
    IconGithub,
    IconRocket,
    TechnologyIcon,
    WorkImage,
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
