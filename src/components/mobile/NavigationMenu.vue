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
              v-slot="{ close }"
              class="absolute z-10 top-0 -right-7 mt-14 py-5 w-80 rounded-lg bg-white opacity-90 shadow-md"
          >
            <MenuContent @close-menu="close" />
          </PopoverPanel>
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
    MenuContent,
  },

  setup() {
    return {
      MenuButton,
    };
  },
});
</script>
