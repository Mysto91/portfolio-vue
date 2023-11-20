<template>
  <section>
    <ul class="
      lg:grid lg:grid-cols-2
      space-y-7 lg:space-y-0 lg:gap-16"
    >
      <li
        v-for="projectItem in projects"
        v-bind:key="projectItem.id"
      >
        <ProjectItem :url="`/projects/${projectItem.id}`">
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

export default defineComponent({
  name: 'ProjectList',

  components: {
    TechnologyIcon,
    ProjectItem,
  },

  setup() {
    const projects = ref<Project[]>([]);

    async function fetchProjects(): Promise<void> {
      projects.value = await getProjects();
    }

    fetchProjects();

    // TODO : Ajouter un filtrage avec une barre de recherche et une pagination

    return {
      projects,
      Framework,
      Language,
      findLanguages,
      findFrameworks,
    };
  },
});
</script>
