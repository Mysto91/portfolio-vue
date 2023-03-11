<template>
  <div
    class="fixed top-0 w-full transition ease-in-out duration-600 -translate-y-full"
    :class="{
      'translate-y-1': visible,
      'opacity-0': !visible
    }"
  >
    <NavbarDesktop class="hidden lg:block" />
    <NavbarMobile class="flex lg:hidden" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import NavbarDesktop from './desktop/NavbarDesktop.vue';
import NavbarMobile from './mobile/NavbarMobile.vue';

export default defineComponent({
  name: 'AppNavbar',

  components: {
    NavbarDesktop,
    NavbarMobile,
  },

  setup() {
    const visible = ref<boolean>(false);

    onMounted(() => {
      setTimeout(() => {
        visible.value = true;
      }, 200);
    });

    return {
      visible,
    };
  },
});
</script>
