<template>
    <NavbarDesktop class="hidden lg:block" />
    <NavbarMobile class="flex lg:hidden" />
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
