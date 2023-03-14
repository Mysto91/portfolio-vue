<template>
    <div>
        <h1 class="my-5 text-5xl leading-[62px] font-medium">
            My experiences
        </h1>
        <ol class="relative ml-5 pl-6 space-y-10 border-l border-black">
          <li
            v-for="(experience, index) in experiences"
            :key="index"
          >
              <TimelineItem :is-current="!experience.endDate">
                  <template #title>
                      {{ experience.title }}
                  </template>
                  <template #icon>
                      <img :src="experience.icon" alt="">
                  </template>
                  <template #date>
                    {{ experience.startDate.toFormat('MMM yyyy', {locale: 'fr'}) }} -
                    {{ experience.endDate?.toFormat('MMM yyyy', {locale: 'fr'}) }}
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
import { DateTime } from 'luxon';
import TimelineItem from './TimelineItem.vue';

export default defineComponent({
  name: 'ExperienceSection',

  components: {
    TimelineItem,
  },

  setup() {
    const dateFormat = 'dd/MM/yyyy';

    const experiences: Experience[] = [
      {
        title: 'Bimpli (Swile)',
        startDate: DateTime.fromFormat('22/11/2022', dateFormat),
        endDate: null,
        icon: 'images/bimpli.png',
        content: 'Développeur full stack Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        title: 'Orange Business Services',
        startDate: DateTime.fromFormat('21/11/2018', dateFormat),
        endDate: DateTime.fromFormat('21/11/2022', dateFormat),
        icon: 'images/orange.png',
        content: 'Développeur back end ...',
      },
      {
        title: 'Airbus Defense & Space (Stage)',
        startDate: DateTime.fromFormat('01/09/2017', dateFormat),
        endDate: DateTime.fromFormat('01/04/2017', dateFormat),
        icon: 'images/airbus.png',
        content: 'Développeur de base de données J\'ai travaillé en tant que développeur junior pendant un an chez une entreprise de développement de logiciels. Mon travail consistait à développer des applications web pour les clients de l\'entreprise. J\'ai travaillé sur plusieurs projets différents, en utilisant des langages de programmation tels que JavaScript, HTML, CSS, et des frameworks tels que React et Angular.',
      },
    ];

    return {
      experiences,
    };
  },
});
</script>
