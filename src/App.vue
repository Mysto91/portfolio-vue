<template>
  <AppNavbar />
  <DecorativeBar />
  <router-view class="mx-auto px-7 max-w-[1140px] h-[3000px]" />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from './components/AppNavbar.vue';
import DecorativeBar from './components/DecorativeBar.vue';
import AppFooter from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',

  components: {
    AppFooter,
    AppNavbar,
    DecorativeBar,
  },
});
</script>
