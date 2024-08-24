<template>
  <div class="bg-background">
    <div
      :class="[
        'fixed z-10 w-full flex justify-end transition ease-in-out',
        flashMessage ? 'translate-x-0' : 'translate-x-1/3'
      ]"
    >
      <FlashMessage
        class="mt-20 lg:mt-24"
        :clear-message="flashMessageStore.clearMessage"
        :flash-message="flashMessage"
      />
    </div>
    <AppNavbar />
    <router-view class="mx-auto px-7 pb-36 md:pb-32 max-w-[1140px] min-h-screen" />
    <AppFooter class="hidden lg:flex" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppFooter from '@/components/footer/AppFooter.vue';
import FlashMessage from '@/components/FlashMessage.vue';
import { useFlashMessageStore } from '@/stores/useFlashMessageStore';
import { storeToRefs } from 'pinia';
import AppNavbar from './components/AppNavbar.vue';
import { useScrollStore } from './stores/useScrollStore';

const { setScrollValue } = useScrollStore();

const flashMessageStore = useFlashMessageStore();
const { flashMessage } = storeToRefs(flashMessageStore);

function handleScroll(): void {
  setScrollValue(window.scrollY);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>
