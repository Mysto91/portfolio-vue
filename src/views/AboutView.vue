<template>
  <div
    class="
      container
      flex flex-col items-center
      space-y-10 lg:space-y-36"
  >
    <div
      class="
        w-full
        flex md:flex-row flex-col items-center
        space-y-10 md:space-x-12 md:space-y-0
        animate-slide-up"
    >
        <AuthorPicture
          class="
            flex-initial
            w-[300px] sm:w-[350px] md:w-[300px] lg:w-[330px]
            shadow-md"
        />
        <div
          class="
            flex-initial
            md:w-[580px] lg:w-[670px]
            flex flex-col justify-center"
        >
          <h1>Hello !</h1>

          <p class="sm:text-2xl">
            Rempli de passion pour le développement web,
            J'éprouve une forte volonté d'exceller et de m'améliorer constamment dans mon travail.
            Découvrez-en davantage sur mon parcours ci-dessous.
          </p>
        </div>
    </div>
    <div
      class="
        w-full
        flex flex-col lg:flex-row
        space-y-12 lg:space-x-12"
    >
      <CareerSection
        class="
          lg:pr-14
          flex-initial
          lg:w-[600px]"
      />

      <TechnologiesSection
        class="
          flex-initial
          lg:w-[440px]"
      />
    </div>

    <ExperienceSection class="w-full" />

    <DegreeSection class="w-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthorPicture from '@/components/AuthorPicture.vue';
import CareerSection from '@/components/sections/CareerSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import TechnologiesSection from '@/components/TechnologiesSection.vue';
import DegreeSection from '@/components/sections/DegreeSection.vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    DegreeSection,
    AuthorPicture,
    TechnologiesSection,
    CareerSection,
    ExperienceSection,
  },
});
</script>
