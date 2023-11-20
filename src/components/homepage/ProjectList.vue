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
            {{ projectItem.description }}
          </template>
          <template #technologies>
            <ul class="flex justify-end space-x-2">
              <li
                v-for="framework in projectItem.technologies.frameworks"
                :key="framework"
              >
                <TechnologyIcon :technology="framework"/>
              </li>

              <li
                v-for="language in projectItem.technologies.languages"
                :key="language"
              >
                <TechnologyIcon :technology="language"/>
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

    // TODO : corriger les problèmes d'affichage des technos
    fetchProjects();

    return {
      projects,
      Framework,
      Language,
    };
  },
});
</script>
