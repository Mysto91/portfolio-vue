<template>
  <section>
    <div v-if="isLoading">
      Chargement
    </div>

    <ul
      v-else-if="projects.length"
      class="
      lg:grid lg:grid-cols-2
      space-y-7 lg:space-y-0 lg:gap-16"
    >
      <li
        v-for="projectItem in projects"
        v-bind:key="projectItem.uuid"
      >
        <ProjectItem :url="`/projects/${projectItem.uuid}`">
          <template #title>
            {{ projectItem.title }}
          </template>
          <template #description>
            {{ projectItem.overview }}
          </template>
          <template #technologies>
            <ul class="flex justify-end space-x-2">
              <li
                v-for="technology in findFrameworks(projectItem.technologies)"
                :key="`framework-${technology.id}`"
              >
                <TechnologyIcon :technology="technology.name"/>
              </li>

              <li
                v-for="technology in findLanguages(projectItem.technologies)"
                :key="`framework-${technology.id}`"
              >
                <TechnologyIcon :technology="technology.name"/>
              </li>
            </ul>
          </template>
        </ProjectItem>
      </li>
    </ul>

    <NoData v-else />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProjectItem from '@/components/project/ProjectItem.vue';
import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';
import { ProjectItem as Project } from '@/interfaces/projectItem';
import TechnologyIcon from '@/components/TechnologyIcon.vue';
import { getProjects } from '@/api/projectApi';
import { findLanguages, findFrameworks } from '@/utils/search';
import NoData from '@/components/NoData.vue';

export default defineComponent({
  name: 'ProjectList',

  components: {
    NoData,
    TechnologyIcon,
    ProjectItem,
  },

  setup() {
    const projects = ref<Project[]>([]);
    const isLoading = ref<boolean>(false);

    async function fetchProjects(): Promise<void> {
      isLoading.value = true;
      projects.value = await getProjects();
      isLoading.value = false;
    }

    fetchProjects();

    // TODO : Ajouter un filtrage avec une barre de recherche et une pagination

    return {
      projects,
      Framework,
      Language,
      findLanguages,
      findFrameworks,
      isLoading,
    };
  },
});
</script>
