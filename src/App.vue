<template>
  <div class="bg-background pt-44">
    <AppNavbar />
    <router-view class="mx-auto px-7 max-w-[1140px] h-[3000px]" />
    <AppFooter />
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
