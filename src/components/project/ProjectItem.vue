<template>
  <router-link
    :to="url"
    class="
    flex flex-col justify-end
    w-full h-[400px] lg:h-[600px]
    rounded-2xl
    drop-shadow-2xl
    bg-auto bg-cover bg-image
    ease-in-out duration-300
    group hover:scale-105"
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
        bg-blue-300 overlay
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectItem',

  props: {
    url: {
      type: String,
      required: true,
    },
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
        url("https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg"
     )
  }
</style>
