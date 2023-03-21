<template>
  <div
    class="
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
            w-[430px] sm:w-[425px] md:w-[300px] lg:w-[330px]"
        />
        <div
          class="
            flex-initial
            md:w-[580px] lg:w-[670px]
            flex flex-col justify-center"
        >
          <PageTitle
            title="Hi there !"
            class="
              text-[48px] md:text-6xl sm:text-5xl lg:text-7xl
              font-medium
              leading-[48px] sm:leading-[64px] md:leading-[70px] lg:leading-[90px]"
          />
          <p
            class="
              text-xl sm:text-2xl
              font-light
              leading-8 sm:leading-10"
            >
            Fuelled by a passion for designing compelling products,
            I have a deep desire to excel and continuously improve in my work.
            Learn more about my journey below.
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
      <TagSection
        class="
          flex-initial
          lg:w-[440px]
          flex items-center"
      />
    </div>
    <ExperienceSection class="w-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthorPicture from '@/components/AuthorPicture.vue';
import CareerSection from '@/components/CareerSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import PageTitle from '@/components/PageTitle.vue';
import TagSection from '@/components/TagSection.vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    AuthorPicture,
    TagSection,
    CareerSection,
    PageTitle,
    ExperienceSection,
  },
});
</script>

<style scoped>
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-up {
    animation-name: slide-up;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
  }
</style>
