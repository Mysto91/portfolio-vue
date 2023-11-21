<template>
  <div>
    <router-link
      :to="{ name: Routes.PROJECTLIST }"
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
        <ProjectImage image-url="https://upload.wikimedia.org/wikipedia/en/c/cb/Earthlights02_dmsp_big.jpg" class="lg:h-full lg:w-1/2" />

        <div class="block lg:w-1/2 space-y-5">
          <ProjectImage image-url="https://upload.wikimedia.org/wikipedia/en/c/cb/Earthlights02_dmsp_big.jpg" class="lg:h-[400px] " />
          <ProjectImage image-url="https://upload.wikimedia.org/wikipedia/en/c/cb/Earthlights02_dmsp_big.jpg" class="lg:h-[400px]" />
        </div>
      </div>

      <div class="lg:flex space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
        <div class="lg:flex-1">
          <h2>Présentation</h2>

          <p>
            {{ projectItem.description }}
          </p>
        </div>

        <div>
          <h2>Technologies</h2>

          <div class="space-y-4">
            <div v-if="frameworks.length">
              <h3>Frameworks</h3>

              <ul class="mt-2 space-y-2.5">
                <li
                  v-for="framework in frameworks"
                  :key="`framework-${framework.id}`"
                  class="flex space-x-2"
                >
                  <TechnologyIcon :technology="framework.name"/>

                  <span class="flex items-center">
                    {{ framework.name }}
                  </span>
                </li>
              </ul>
            </div>

            <div v-if="languages.length">
              <h3>Langages</h3>

              <ul class="mt-2 space-y-2.5">
                <li
                  v-for="language in languages"
                  :key="`language-${language.id}`"
                  class="flex"
                >
                  <TechnologyIcon class="flex-none" :technology="language.name"/>

                  <span class="ml-2 flex items-center">
                  {{ language.name }}
                </span>
                </li>
              </ul>
            </div>

            <NoData v-if="!languages.length && !frameworks.length" />
          </div>
        </div>
      </div>

      <div v-if="projectItem.functionalities.length">
        <h2>Fonctionalités</h2>

        <ul class="space-y-2.5">
          <li
            v-for="functionality in projectItem.functionalities"
            :key="`functionality-${functionality.id}`"
            class="flex"
          >
            <IconRocket class="flex-none" />

            <span class="flex items-center ml-2">
              {{ functionality.description }}
            </span>
          </li>
        </ul>
      </div>

      <div v-if="projectItem.credits">
        <h2>Remerciements</h2>

        <p>
          {{ projectItem.credits }}
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
import { computed, defineComponent, ref } from 'vue';
import ProjectImage from '@/components/project/ProjectImage.vue';
import { useRoute } from 'vue-router';
import { Routes } from '@/constants/routes';
import { ProjectItem, Technology } from '@/interfaces/projectItem';
import TechnologyIcon from '@/components/TechnologyIcon.vue';
import IconRocket from '@/components/icons/IconRocket.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconPlay from '@/components/icons/IconPlay.vue';
import IconLeftArrow from '@/components/icons/IconLeftArrow.vue';
import { getProjectById } from '@/api/projectApi';
import NoData from '@/components/NoData.vue';
import { findFrameworks, findLanguages } from '@/utils/search';
import { UUID } from '@/types/request';

export default defineComponent({
  name: 'WorkViewList',

  components: {
    NoData,
    IconLeftArrow,
    IconPlay,
    IconGithub,
    IconRocket,
    TechnologyIcon,
    ProjectImage,
  },

  setup() {
    const projectItem = ref<ProjectItem | null>(null);
    const route = useRoute();

    async function fetchProjectItem(): Promise<void> {
      projectItem.value = await getProjectById(route.params.workId as UUID);
    }

    const languages = computed<Technology[]>(() => {
      if (!projectItem.value) {
        return [];
      }

      return findLanguages(projectItem.value.technologies);
    });

    const frameworks = computed<Technology[]>(() => {
      if (!projectItem.value) {
        return [];
      }

      return findFrameworks(projectItem.value.technologies);
    });

    fetchProjectItem();

    return {
      projectItem,
      languages,
      frameworks,
      Routes,
    };
  },
});
</script>
