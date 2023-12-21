<template>
  <div class="container">
    <div class="flex">
      <BackButton :to="Routes.PROJECTLIST">
        Retour vers les projets
      </BackButton>
    </div>

    <!--  TODO : déplacer dans skeletons  -->
    <div
      v-if="isLoading"
      class="mt-5 space-y-10"
    >
      <LineSkeleton class="h-10 max-w-md"/>

      <div class="
        lg:h-[820px]
        lg:flex space-y-5 lg:space-x-5 lg:space-y-0"
      >
        <ImageSkeleton class="lg:h-full lg:w-1/2" />

        <div class="block lg:w-1/2 space-y-5">
          <ImageSkeleton class="lg:h-[400px]" />
          <ImageSkeleton class="lg:h-[400px]" />
        </div>
      </div>

      <div class="grid grid-cols-2 space-x-5">
        <div>
          <LineSkeleton class="h-8 max-w-md" />

          <div class="mt-5 space-y-2">
            <LineSkeleton class="h-3 max-w-md" />
            <LineSkeleton class="h-3 max-w-sm" />
            <LineSkeleton class="h-3 max-w-lg" />
            <LineSkeleton class="h-3 max-w-md" />
          </div>
        </div>

        <div>
          <LineSkeleton class="h-8 max-w-md"/>
          <TagsSkeleton class="mt-5" />
        </div>
      </div>
    </div>

    <div
      v-else-if="projectItem"
      class="space-y-10 animate-slide-up duration-300 ease-in-out"
    >
      <h1>{{ projectItem.title }}</h1>

      <Swiper
        :effect="'coverflow'"
        :grab-cursor="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :centered-slides="true"
        :pagination="true"
        :navigation="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false ,
        }"
        :speed="800"
        :keyboard="{
          enabled: true,
        }"
        :modules="modules"
        class="py-16 select-none"
      >
        <SwiperSlide
          v-for="image in projectItem.images"
          :key="`project-image-${image.type}`"
          class="
            h-72 w-72 md:h-96 md:w-96 lg:w-[500px] lg:h-[500px]
            flex items-center justify-center"
        >
          <img
            :src="image.url"
            :alt="image.type"
            class="
              h-full w-full
              object-cover
              flex items-center justify-center
              text-center
              rounded-2xl
              shadow-xl"
          />
        </SwiperSlide>
      </Swiper>

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

    <div v-else>
      Work not found
    </div>
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
import ImageSkeleton from '@/components/skeletons/ImageSkeleton.vue';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useLoading } from '@/composables/useLoading';
import { Technology } from '@/interfaces/technology';
import BackButton from '@/components/BackButton.vue';
import TechnologyTagList from '@/components/TechnologyTagList.vue';

export default defineComponent({
  name: 'ProjectViewList',

  components: {
    TechnologyTagList,
    BackButton,
    TagsSkeleton,
    LineSkeleton,
    ImageSkeleton,
    NoData,
    IconPlay,
    IconGithub,
    IconRocket,
    Swiper,
    SwiperSlide,
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
      modules: [EffectCoverflow, Pagination],
    };
  },
});
</script>
