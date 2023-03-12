<template>
  <AppNavbar />
  <DecorativeBar />
  <router-view class="mx-auto px-7 max-w-[1140px]" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from './components/AppNavbar.vue';
import DecorativeBar from './components/DecorativeBar.vue';

export default defineComponent({
  name: 'App',

  components: {
    AppNavbar,
    DecorativeBar,
  },
});
</script>
