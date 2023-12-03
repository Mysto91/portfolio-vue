<template>
    <nav
      class="px-12 py-5"
      :class="{'shadow-md shadow-secondary bg-background': scrollValue > 0 }"
    >
        <div class="h-12 flex justify-between">
            <AppBrand />
            <ul class="flex items-center justify-center space-x-6">
                <li>
                    <NavigationLink :route="Routes.ABOUT">
                        À propos
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink :route="Routes.CONTACT">
                        Contact
                    </NavigationLink>
                </li>
                <li>
                    <ViewProjectLink />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Routes } from '@/enums/routes';
import { useScrollStore } from '@/stores/useScrollStore';
import { storeToRefs } from 'pinia';
import NavigationLink from '../NavigationLink.vue';
import AppBrand from '../AppBrand.vue';
import ViewProjectLink from '../ViewProjectLink.vue';

export default defineComponent({
  name: 'NavbarDesktop',

  components: {
    NavigationLink,
    AppBrand,
    ViewProjectLink,
  },

  setup() {
    const store = useScrollStore();

    const { scrollValue } = storeToRefs(store);

    return {
      Routes,
      scrollValue,
    };
  },
});
</script>
