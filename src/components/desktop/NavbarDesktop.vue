<template>
    <nav
      class="px-12 py-5"
      :class="scrollValue > 0 ? 'border-b bg-background' : 'bg-transparent'"
    >
        <div class="h-12 flex justify-between">
            <AppBrand />
            <ul class="flex items-center justify-center space-x-3">
                <li>
                    <NavigationLink :route="Routes.ABOUT">
                      <template #title>
                        À propos
                      </template>
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink :route="Routes.CONTACT">
                      <template #title>
                        Contact
                      </template>
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink :route="Routes.PROJECTLIST">
                      <template #title>
                        Mes projets
                      </template>
                    </NavigationLink>
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

export default defineComponent({
  name: 'NavbarDesktop',

  components: {
    NavigationLink,
    AppBrand,
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
