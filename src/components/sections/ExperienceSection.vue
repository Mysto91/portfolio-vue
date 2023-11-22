<template>
    <div>
        <h2>Mes expériences</h2>

        <p v-if="isLoading">
          Chargement
        </p>

        <ol
          v-else-if="experiences.length"
          class="relative ml-5 pl-6 space-y-10 border-l-2 border-gray-400"
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
                      {{ experience.company.name }} - {{ experience.title }}
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
                      {{ experience.overview }}
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
import TimelineItem from '../TimelineItem.vue';

export default defineComponent({
  name: 'ExperienceSection',

  components: {
    NoData,
    TimelineItem,
  },

  setup() {
    const experiences = ref<Experience[]>([]);
    const isLoading = ref<boolean>(false);

    async function setExperiences(): Promise<void> {
      isLoading.value = true;
      experiences.value = await getExperiences();
      isLoading.value = false;
    }

    setExperiences();

    return {
      experiences,
      isLoading,
    };
  },
});
</script>
