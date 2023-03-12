<template>
  <div
    class="
      flex flex-col items-center
      lg:space-y-36 space-y-10"
  >
    <div
      class="
        w-full
        flex md:flex-row flex-col items-center
        md:space-x-12 md:space-y-0 space-y-10"
    >
        <AuthorPicture
          class="
            flex-initial
            lg:w-[330px] md:w-[300px] sm:w-[425px] w-[430px]"
        />
        <div
          class="
            flex-initial
            lg:w-[670px] md:w-[580px]
            flex flex-col justify-center"
        >
          <PageTitle
            title="Hi there !"
            class="
              lg:text-7xl md:text-6xl sm:text-5xl text-[48px]
              font-medium
              lg:leading-[90px] md:leading-[70px] sm:leading-[64px] leading-[48px]"
          />
          <p
            class="
              sm:text-2xl text-xl
              font-light
              sm:leading-10 leading-8"
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
        flex lg:flex-row flex-col
        lg:space-x-12 space-y-12"
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

</style>
