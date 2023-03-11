<template>
    <nav class="fixed top-0 px-7 py-6 w-full h-20 flex justify-between bg-transparent font-poppins">
        <AppBrand />
        <NavigationMenu />
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBrand from '../AppBrand.vue';
import NavigationMenu from './NavigationMenu.vue';

export default defineComponent({
  name: 'NavbarMobile',

  components: {
    AppBrand,
    NavigationMenu,
  },
});
</script>
