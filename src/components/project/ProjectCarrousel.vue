<template>
  <Swiper
    :effect="'coverflow'"
    :grab-cursor="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
    :centered-slides="true"
    :pagination="true"
    :navigation="true"
    :autoplay="{
          delay: 4000,
          disableOnInteraction: false ,
        }"
    :speed="800"
    :keyboard="{
          enabled: true,
        }"
    :modules="[EffectCoverflow, Pagination]"
    class="py-16 select-none"
  >
    <SwiperSlide
      v-for="image in projectItem.images"
      :key="`project-image-${image.type}`"
      class="
            h-72 w-72 md:h-96 md:w-96 lg:w-[500px] lg:h-[500px]
            flex items-center justify-center"
    >
      <img
        :src="image.url"
        :alt="image.type"
        class="
              h-full w-full
              object-cover
              flex items-center justify-center
              text-center
              rounded-2xl
              shadow-xl"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ProjectItem } from '@/models/projectItem';
import { EffectCoverflow, Pagination } from 'swiper/modules';

defineProps({
  projectItem: {
    type: Object as PropType<ProjectItem>,
    required: true,
  },
});
</script>
