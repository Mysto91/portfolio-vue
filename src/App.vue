<template>
  <AppNavbar />
  <DecorativeBar />
  <router-view class="mt-1 px-7" />
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
