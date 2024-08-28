<template>
  <div class="fixed top-0 z-[100] w-full animate-slide-down">
    <NavbarDesktop class="hidden lg:block" />
    <NavbarMobile class="flex lg:hidden" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarDesktop from './desktop/NavbarDesktop.vue';
import NavbarMobile from './mobile/NavbarMobile.vue';

export default defineComponent({
  name: 'AppNavbar',

  components: {
    NavbarDesktop,
    NavbarMobile,
  },
});
</script>

<style scoped>
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 1024px) {
    .animate-slide-down {
      animation-name: slide-down;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
    }
  }
</style>
