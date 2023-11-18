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
      v-if="projectItem"
      class="space-y-10"
    >
      <h1>{{ projectItem.title }}</h1>

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
            {{ projectItem.content.overview }}
          </p>
        </div>

        <div>
          <h2>Technologies</h2>

          <div class="space-y-4">
            <h3>Frameworks</h3>

            <ul class="space-y-2.5">
              <li
                v-for="framework in projectItem.technologies.frameworks"
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
                v-for="(language, index) in projectItem.technologies.languages"
                :key="index"
                class="flex"
              >
                <TechnologyIcon class="flex-none" :technology="language"/>

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
            v-for="(functionality, index) in projectItem.functionalities"
            :key="index"
            class="flex"
          >
            <IconRocket class="flex-none" />

            <span class="flex items-center ml-2">
              {{ functionality }}
            </span>
          </li>
        </ul>
      </div>

      <div v-if="projectItem.content.credits">
        <h2>Remerciements</h2>

        <p>
          {{ projectItem.content.credits }}
        </p>
      </div>

      <div>
        <h2>En voir davantage</h2>

        <div class="lg:flex lg:space-x-10 space-y-10 lg:space-y-0">
          <a
            :href="projectItem.appUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn flex justify-center"
          >
            <span class="flex items-center">
              <IconPlay class="fill-white"/>
            </span>

            <span class="ml-2 flex items-center">
              Voir l'application
            </span>
          </a>
          <a
            v-if="projectItem.githubUrl"
            :href="projectItem.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn flex justify-center"
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
import WorkImage from '@/components/project/ProjectImage.vue';
import { useRoute } from 'vue-router';
import { getWorkById } from '@/services/workService';
import { Routes } from '@/constants/routes';
import { ProjectItem } from '@/interfaces/projectItem';
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
    const projectItem: ProjectItem | undefined = getWorkById(Number(route.params.workId));

    return {
      projectItem,
      Routes,
    };
  },
});
</script>
