<template>
  <section>
    <FadeTransition>
      <ProjectListSkeleton v-if="isLoading"/>

      <ul
        v-else-if="projects.length"
        class="
          md:grid md:grid-cols-2
          space-y-7 md:space-y-0 md:gap-8 lg:gap-16"
      >
        <li
          class="
            flex justify-center
            transition duration-500 ease-in-out"
          v-for="projectItem in projects"
          :key="projectItem.uuid"
        >
          <CardItem :url="`/projects/${projectItem.uuid}`">
            <template #header>
              <div class="flex">
                <span class="flex-grow">
                  <IconRocketColored />
                </span>

                <a
                  href="javascript:void(0)"
                  class="
                    relative
                    w-10 h-10
                    flex items-center justify-center
                    group"
                  @click.stop="openInNewTab(projectItem.appUrl)"
                >
                  <IconNewTab
                    class="
                      lg:h-10 lg:w-10
                      stroke-primary group-hover:stroke-text
                      transition ease-in-out duration-300"
                  />
                  <span class="sr-only">Open in new tab</span>
                </a>
              </div>
            </template>

            <template #title>
              {{ projectItem.title }}
            </template>

            <template #description>
              {{ projectItem.overview }}
            </template>

            <template #technologies>
              <TechnologyTagList
                class="gap-1 md:gap-2"
                :technologies="findFrameworks(projectItem.technologies)"
                text-class="text-sm"
              />
            </template>
          </CardItem>
        </li>
      </ul>

      <NoData v-else />
    </FadeTransition>
  </section>
</template>

<script lang="ts">
import {
  defineComponent, PropType, Ref, watch,
} from 'vue';
import CardItem from '@/components/CardItem.vue';
import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';
import { ProjectItem as Project } from '@/interfaces/projectItem';
import { getProjects } from '@/api/projectApi';
import { findFrameworks } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import { SearchParams } from '@/interfaces/searchParams';
import { debounce } from 'vue-debounce';
import IconRocketColored from '@/components/icons/IconRocketColored.vue';
import IconNewTab from '@/components/icons/IconNewTab.vue';
import { openInNewTab } from '@/utils/window';
import TechnologyTagList from '@/components/TechnologyTagList.vue';
import { useApiRequest } from '@/composables/useApiRequest';
import FadeTransition from '@/components/FadeTransition.vue';
import ProjectListSkeleton from '@/components/skeletons/ProjectListSkeleton.vue';

export default defineComponent({
  name: 'ProjectList',

  components: {
    ProjectListSkeleton,
    FadeTransition,
    TechnologyTagList,
    IconNewTab,
    IconRocketColored,
    NoData,
    CardItem,
  },

  props: {
    searchParams: {
      type: Object as PropType<SearchParams>,
      default: undefined,
    },
  },

  setup(props) {
    const {
      result: projects,
      isLoading,
      getData,
    } = useApiRequest({ apiCallback: getProjects });

    watch(
      () => props.searchParams,
      debounce(async (searchParams) => getData(searchParams), 400),
      { deep: true },
    );

    return {
      projects: projects as Ref<Project[]>,
      Framework,
      Language,
      findFrameworks,
      isLoading,
      openInNewTab,
    };
  },
});
</script>
