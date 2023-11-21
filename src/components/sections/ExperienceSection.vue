<template>
    <div>
        <h2>Mes expériences</h2>
        <ol class="relative ml-5 pl-6 space-y-10 border-l-2 border-gray-400">
          <li
            v-for="(experience, index) in experiences"
            :key="index"
          >
              <TimelineItem
                  :url="experience.companyUrl"
                  :start-date="experience.startDate"
                  :end-date="experience.endDate"
              >
                  <template #title>
                      {{ experience.title }}
                  </template>
                  <template #icon>
                    <div :class="`relative w-14 h-14 rounded-full overflow-hidden ${experience.class ?? ''}`">
                      <img :src="experience.icon" alt="" class="object-cover w-full h-full">
                    </div>
                  </template>
                  <template #content>
                      {{ experience.content }}
                  </template>
              </TimelineItem>
          </li>
        </ol>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Experience } from '@/interfaces/Experience';
import { getAllExperiences } from '@/services/experienceService';
import TimelineItem from '../TimelineItem.vue';

export default defineComponent({
  name: 'ExperienceSection',

  components: {
    TimelineItem,
  },

  setup() {
    const experiences: Experience[] = getAllExperiences();

    return {
      experiences,
    };
  },
});
</script>
