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
                :search="searchParams.search"
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

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import CardItem from '@/components/CardItem.vue';
import { ProjectItem as Project } from '@/models/projectItem';
import { getProjects } from '@/api/projectApi';
import { findFrameworks } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import { SearchParams } from '@/interfaces/searchParams';
import IconRocketColored from '@/components/icons/IconRocketColored.vue';
import IconNewTab from '@/components/icons/IconNewTab.vue';
import { openInNewTab } from '@/utils/window';
import TechnologyTagList from '@/components/TechnologyTagList.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import ProjectListSkeleton from '@/components/skeletons/ProjectListSkeleton.vue';
import { useQuery } from 'vue-query';
import { CacheKey } from '@/cache/cacheService';

const props = defineProps({
  searchParams: {
    type: Object as PropType<SearchParams>,
  },
});

const search = computed<SearchParams>(() => props.searchParams ?? {});

const { data, isLoading } = useQuery({
  queryKey: [CacheKey.EXPERIENCES, search],
  queryFn: () => getProjects(search.value),
});

const projects = computed<Project[]>(() => data.value?.items ?? []);
</script>
