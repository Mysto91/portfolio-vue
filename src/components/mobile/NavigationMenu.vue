<template>
    <Popover class="relative flex items-center justify-center">
        <PopoverButton :as="MenuButton" />
         <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
          <PopoverPanel
              :as="MenuContent"
              class="absolute z-10 top-0 -right-7 mt-14 pb-5 w-80 flex flex-col space-y-3 rounded-lg bg-white opacity-90 shadow-md"
          />
        </transition>
    </Popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import MenuButton from './MenuButton.vue';
import MenuContent from './MenuContent.vue';

export default defineComponent({
  name: 'NavigationMenu',

  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },

  setup() {
    return {
      MenuButton,
      MenuContent,
    };
  },
});
</script>
