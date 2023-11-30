<template>
  <router-link
    :to="url"
    :style="imageStyle"
    class="
    flex flex-col justify-end
    w-full h-[300px] lg:h-[400px]
    rounded-2xl
    drop-shadow-2xl
    bg-auto bg-cover
    ease-in-out duration-300
    group hover:scale-[102%]"
  >
    <slot name="image"></slot>
    <div class="
      relative
      h-24
      p-5 sm:px-7 sm:pb-14
      text-white
      rounded-b-2xl
      ease-in-out duration-300
      group-hover:h-full
    ">
      <div class="
        absolute
        inset-0
        bg-black overlay
        rounded-b-2xl
        ease-in-out duration-300
        group-hover:bg-black"
      ></div>
      <div class="relative z-10 h-full flex flex-col">
        <h4 class="
          flex-none
          text-xl sm:text-2xl md:text-3xl
          sm:leading-7"
        >
          <slot name="title"></slot>
        </h4>
        <div class="
          flex-grow
          flex flex-col justify-center
          opacity-0
          ease-in-out duration-300
          group-hover:opacity-100"
        >
          <p class="
            flex-grow
            flex items-center justify-center
            text-sm sm:text-base md:text-lg"
          >
            <slot name="description"></slot>
          </p>
          <div>
            <slot name="technologies"></slot>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Url } from '@/types/request';
import { useImageStyle } from '@/composables/useStyle';

export default defineComponent({
  name: 'CardItem',

  props: {
    url: {
      type: String,
      required: true,
    },
    backgroundImageUrl: {
      type: String as PropType<Url | null>,
      default: null,
    },
  },

  setup(props) {
    const { imageStyle } = useImageStyle({
      imageUrl: props.backgroundImageUrl,
      defaultImageUrl: 'https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg',
    });

    return {
      imageStyle,
    };
  },
});
</script>

<style scoped>
  .overlay {
    -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  }

  .bg-image {
     background-image: linear-gradient(
        180deg,
        rgba(16,32,44,0) 62%,#3db4cf),
        url("https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg")
  }
</style>
