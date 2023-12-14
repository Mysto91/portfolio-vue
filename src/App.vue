<template>
  <div class="bg-background pt-20 md:pt-32 lg:pt-44 h-full">
    <AppNavbar />
    <router-view class="mx-auto px-7 pb-36 md:pb-32 max-w-[1140px] min-h-screen" />
    <AppFooter class="hidden lg:flex" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AppFooter from '@/components/footer/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';
import { useScrollStore } from './stores/useScrollStore';

export default defineComponent({
  name: 'App',

  components: {
    AppFooter,
    AppNavbar,
  },

  setup() {
    const { setScrollValue } = useScrollStore();

    function handleScroll(): void {
      setScrollValue(window.scrollY);
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
  },
});
</script>
