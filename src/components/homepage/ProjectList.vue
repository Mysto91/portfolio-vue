<template>
  <section>
    <ul
      v-if="isLoading"
      class="
        lg:grid lg:grid-cols-2
        space-y-7 lg:space-y-0 lg:gap-16"
    >
      <li
        v-for="index in 4"
        :key="`skeleton-${index}`"
        class="flex justify-center"
      >
        <ImageSkeleton class="h-[500px] rounded-2xl drop-shadow-2xl" />
      </li>
    </ul>

    <ul
      v-else-if="projects.length"
      class="
      lg:grid lg:grid-cols-2
      space-y-7 lg:space-y-0 lg:gap-16"
    >
      <li
        class="animate-slide-up duration-500 ease-in-out"
        v-for="projectItem in projects"
        :key="projectItem.uuid"
      >
        <CardItem
          :url="`/projects/${projectItem.uuid}`"
          :background-image-url="projectItem.images.mainImageUrl"
        >
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
        </CardItem>
      </li>
    </ul>

    <NoData v-else />
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
import { findLanguages, findFrameworks } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import ImageSkeleton from '@/components/skeletons/ImageSkeleton.vue';
import { SearchParams } from '@/interfaces/searchParams';
import { debounce } from 'vue-debounce';

export default defineComponent({
  name: 'ProjectList',

  components: {
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
    const isLoading = ref<boolean>(false);

    async function fetchProjects(): Promise<void> {
      isLoading.value = true;
      projects.value = await getProjects();
      isLoading.value = false;
    }

    fetchProjects();

    watch(
      () => props.searchParams,
      debounce(async (searchParams) => {
        isLoading.value = true;
        projects.value = await getProjects(searchParams);
        isLoading.value = false;
      }, 400),
      { deep: true },
    );

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
