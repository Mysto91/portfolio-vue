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
    <div class="w-full">
      <h1 class="my-5 text-5xl leading-[62px] font-medium">
          My experiences
      </h1>
      <ol class="relative ml-5 pl-6 space-y-10 border-l border-black">
        <li>
            <TimelineItem :is-current="true">
              <template #title>
                Bimpli (Swile)
              </template>
              <template #date>
                2022
              </template>
              <template #content>
                Développeur full stack ...
              </template>
            </TimelineItem>
        </li>
        <li>
            <TimelineItem>
              <template #title>
                Orange Business Services
              </template>
              <template #date>
                2018 - 2022 (4 ans)
              </template>
              <template #content>
                Développeur back end ...
              </template>
            </TimelineItem>
        </li>
        <li>
            <TimelineItem>
              <template #title>
                Airbus Defense & Space (Stage)
              </template>
              <template #date>
                2017 (5 mois)
              </template>
              <template #content>
                Développeur de base de données
              </template>
            </TimelineItem>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import AuthorPicture from '@/components/AuthorPicture.vue';
import CareerSection from '@/components/CareerSection.vue';
import PageTitle from '@/components/PageTitle.vue';
import TagSection from '@/components/TagSection.vue';
import TimelineItem from '@/components/TimelineItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',

  components: {
    AuthorPicture,
    TagSection,
    CareerSection,
    PageTitle,
    TimelineItem,
  },
});
</script>

<style scoped>

</style>
