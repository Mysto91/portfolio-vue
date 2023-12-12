<template>
    <div>
        <h2>Mes expériences</h2>

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
                      {{ experience.title }}
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
                    <ul class="py-2 flex flex-wrap gap-2">
                      <li
                        v-for="technology in experience.technologies"
                        :key="`experience-technology-${technology.id}`"
                      >
                        <AppTag class="p-1 flex items-center space-x-2">
                          <TechnologyIcon class="h-5 w-5" :technology="technology.name"/>

                          <p class="text-sm">
                            {{ technology.name }}
                          </p>
                        </AppTag>
                      </li>
                    </ul>

                    <p class="text-base">
                      {{ experience.overview }}
                    </p>
                  </template>
              </TimelineItem>
          </li>
        </ol>

        <NoData v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Experience } from '@/interfaces/Experience';
import { getExperiences } from '@/api/experienceApi';
import NoData from '@/components/NoData.vue';
import { ContractType } from '@/enums/contractType';
import { Size } from '@/enums/size';
import TimeLineSkeleton from '@/components/skeletons/TimeLineSkeleton.vue';
import { useLoading } from '@/composables/useLoading';
import AppTag from '@/components/AppTag.vue';
import TechnologyIcon from '@/components/TechnologyIcon.vue';
import TimelineItem from '../TimelineItem.vue';

export default defineComponent({
  name: 'ExperienceSection',

  components: {
    TechnologyIcon,
    AppTag,
    TimeLineSkeleton,
    NoData,
    TimelineItem,
  },

  setup() {
    const experiences = ref<Experience[]>([]);

    const {
      isLoading,
      startLoading,
      stopLoading,
    } = useLoading();

    async function setExperiences(): Promise<void> {
      startLoading();
      experiences.value = await getExperiences();
      stopLoading();
    }

    setExperiences();

    return {
      experiences,
      isLoading,
      ContractType,
      Size,
    };
  },
});
</script>
