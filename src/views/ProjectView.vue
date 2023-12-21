<template>
  <div class="container">
    <div class="flex">
      <BackButton :to="Routes.PROJECTLIST">
        Retour vers les projets
      </BackButton>
    </div>

    <ProjectSkeleton v-if="isLoading" />

    <div
      v-else-if="projectItem"
      class="space-y-10 animate-slide-up duration-300 ease-in-out"
    >
      <h1>{{ projectItem.title }}</h1>

      <ProjectCaroussel :project-item="projectItem" />

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

              <TechnologyTagList
                class="mt-2"
                :technologies="frameworks"
              />
            </div>

            <div v-if="languages.length">
              <h3>Langages</h3>

              <TechnologyTagList
                class="mt-2"
                :technologies="languages"
              />
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
            class="btn bg-primary flex justify-center"
          >
            <span class="flex items-center">
              <IconPlay class="fill-background"/>
            </span>

            <span class="ml-2 flex items-center text-background">
              Voir l'application
            </span>
          </a>
          <a
            v-if="projectItem.githubUrl"
            :href="projectItem.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-primary flex justify-center"
          >
            <span class="flex items-center">
              <IconGithub class="text-background" />
            </span>

            <span class="ml-2 text-background">
              Voir le github
            </span>
          </a>
        </div>
      </div>
    </div>

    <NotFoundView v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Routes } from '@/enums/routes';
import { ProjectItem } from '@/interfaces/projectItem';
import IconRocket from '@/components/icons/IconRocket.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconPlay from '@/components/icons/IconPlay.vue';
import { getProjectById } from '@/api/projectApi';
import NoData from '@/components/NoData.vue';
import { findFrameworks, findLanguages } from '@/utils/search';
import { UUID } from '@/types/request';
import { useLoading } from '@/composables/useLoading';
import { Technology } from '@/interfaces/technology';
import BackButton from '@/components/BackButton.vue';
import TechnologyTagList from '@/components/TechnologyTagList.vue';
import ProjectSkeleton from '@/components/skeletons/ProjectSkeleton.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProjectCaroussel from '@/components/project/ProjectCarrousel.vue';

export default defineComponent({
  name: 'ProjectViewList',

  components: {
    ProjectCaroussel,
    NotFoundView,
    ProjectSkeleton,
    TechnologyTagList,
    BackButton,
    NoData,
    IconPlay,
    IconGithub,
    IconRocket,
  },

  setup() {
    const projectItem = ref<ProjectItem | null>(null);
    const route = useRoute();

    const {
      isLoading,
      startLoading,
      stopLoading,
    } = useLoading();

    async function fetchProjectItem(): Promise<void> {
      startLoading();
      projectItem.value = await getProjectById(route.params.workId as UUID);
      stopLoading();
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
      isLoading,
    };
  },
});
</script>
