<template>
    <div>
        <h2>My experiences</h2>
        <ol class="relative ml-5 pl-6 space-y-10 border-l border-black">
          <li
            v-for="(experience, index) in experiences"
            :key="index"
          >
              <TimelineItem
                  :start-date="experience.startDate"
                  :end-date="experience.endDate"
              >
                  <template #title>
                      {{ experience.title }}
                  </template>
                  <template #icon>
                      <img :src="experience.icon" alt="">
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
