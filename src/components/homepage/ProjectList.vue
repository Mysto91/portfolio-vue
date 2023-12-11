<template>
  <section>
    <ul
      class="
        lg:grid lg:grid-cols-2
        space-y-7 lg:space-y-0 lg:gap-16
        transition ease-in-out duration-300"
      :class="isLoading ? 'opacity-100' : 'opacity-0 h-0'"
    >
      <li
        v-for="index in 4"
        :key="`skeleton-${index}`"
        class="flex justify-center"
      >
        <ImageSkeleton class="h-[400px] rounded-2xl drop-shadow-2xl" />
      </li>
    </ul>

    <ul
      class="
      md:grid md:grid-cols-2
      space-y-7 md:space-y-0 md gap-8 lg:gap-16
      transition ease-in-out duration-300"
      :class="!isLoading && projects.length ? 'opacity-100' : 'opacity-0 h-0'"
    >
      <li
        class="transition duration-500 ease-in-out"
        v-for="projectItem in projects"
        :key="projectItem.uuid"
      >
        <CardItem
          :url="`/projects/${projectItem.uuid}`"
          :background-image-url="projectItem.images.mainImageUrl"
        >
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
            <ul class="flex flex-wrap gap-0.5 md:gap-1">
              <li
                v-for="technology in findFrameworks(projectItem.technologies)"
                :key="`framework-${technology.id}`"
              >
                <AppTag class="p-1 flex items-center space-x-2 !rounded-full">
                  <TechnologyIcon class="h-5 w-5" :technology="technology.name"/>

                  <p class="text-sm">
                    {{ technology.name }}
                  </p>
                </AppTag>
              </li>
            </ul>
          </template>
        </CardItem>
      </li>
    </ul>

    <NoData :class="!isLoading && !projects.length ? 'opacity-100' : 'opacity-0 h-0'" />
  </section>
</template>

<script lang="ts">
import {
  defineComponent, PropType, ref, watch,
} from 'vue';
import CardItem from '@/components/CardItem.vue';
import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';
import { ProjectItem as Project } from '@/interfaces/projectItem';
import TechnologyIcon from '@/components/TechnologyIcon.vue';
import { getProjects } from '@/api/projectApi';
import { findFrameworks } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import ImageSkeleton from '@/components/skeletons/ImageSkeleton.vue';
import { SearchParams } from '@/interfaces/searchParams';
import { debounce } from 'vue-debounce';
import AppTag from '@/components/AppTag.vue';
import IconRocketColored from '@/components/icons/IconRocketColored.vue';
import IconNewTab from '@/components/icons/IconNewTab.vue';
import { openInNewTab } from '@/utils/window';
import { useLoading } from '@/composables/useLoading';

export default defineComponent({
  name: 'ProjectList',

  components: {
    IconNewTab,
    IconRocketColored,
    AppTag,
    ImageSkeleton,
    NoData,
    TechnologyIcon,
    CardItem,
  },

  props: {
    searchParams: {
      type: Object as PropType<SearchParams>,
      default: undefined,
    },
  },

  setup(props) {
    const projects = ref<Project[]>([]);

    const {
      isLoading,
      startLoading,
      stopLoading,
    } = useLoading();

    async function fetchProjects(): Promise<void> {
      startLoading();
      projects.value = await getProjects();
      stopLoading();
    }

    fetchProjects();

    watch(
      () => props.searchParams,
      debounce(async (searchParams) => {
        startLoading();
        projects.value = await getProjects(searchParams);
        stopLoading();
      }, 400),
      { deep: true },
    );

    return {
      projects,
      Framework,
      Language,
      findFrameworks,
      isLoading,
      openInNewTab,
    };
  },
});
</script>
