<template>
    <div>
      <h2>Mes expériences</h2>

      <FadeTransition>
        <ul
          v-if="isLoading"
          class="space-y-12"
        >
          <li
            v-for="index in 3"
            :key="`skeleton-timeline-${index}`"
          >
            <TimeLineSkeleton />
          </li>
        </ul>

        <ol
          v-else-if="experiences.length"
          class="relative ml-5 pl-6 space-y-10 border-l-2 border-secondary"
        >
          <li
            v-for="experience in experiences"
            :key="experience.uuid"
          >
            <TimelineItem
              :url="experience.company.url"
              :start-date="experience.startDate"
              :end-date="experience.endDate"
            >
              <template #title>
                {{ experience.company.name }} -
                {{ experience.contractType === ContractType.INTERNSHIP ? '(Stage)' : '' }}
                {{ experience.position }}
              </template>

              <template #icon>
                <div :class="`relative w-14 h-14 rounded-full overflow-hidden ${experience.company.logoClass ?? ''}`">
                  <img
                    :src="`/images/${experience.company.logo}`"
                    alt="company-logo"
                    class="object-cover w-full h-full"
                  >
                </div>
              </template>

              <template #content>
                <TechnologyTagList
                  class="py-2 gap-2"
                  :technologies="getShowableTechnologies(experience.technologies)"
                  text-class="text-sm"
                />

                <p class="text-base">
                  {{ experience.overview }}
                </p>
              </template>
            </TimelineItem>
          </li>
        </ol>

        <NoData v-else />
      </FadeTransition>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Experience, ExperienceTechnology } from '@/models/experience';
import { getExperiences } from '@/api/experienceApi';
import NoData from '@/components/NoData.vue';
import { ContractType } from '@/enums/contractType';
import { Size } from '@/enums/size';
import TimeLineSkeleton from '@/components/skeletons/TimeLineSkeleton.vue';
import { CacheKey } from '@/cache/cacheService';
import TechnologyTagList from '@/components/TechnologyTagList.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import { useQuery } from 'vue-query';
import TimelineItem from '../TimelineItem.vue';

export default defineComponent({
  name: 'ExperienceSection',

  components: {
    FadeTransition,
    TechnologyTagList,
    TimeLineSkeleton,
    NoData,
    TimelineItem,
  },

  setup() {
    const { data, isLoading } = useQuery({
      queryKey: [CacheKey.EXPERIENCES],
      queryFn: () => getExperiences(),
    });

    const experiences = computed<Experience[]>(() => data.value?.items ?? []);

    function getShowableTechnologies(technologies : ExperienceTechnology[]): ExperienceTechnology[] {
      return technologies.filter((technology) => technology.showInOverview);
    }

    return {
      experiences,
      isLoading,
      ContractType,
      Size,
      getShowableTechnologies,
    };
  },
});
</script>
