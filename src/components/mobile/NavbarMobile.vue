<template>
  <nav>
    <div
      class="px-7 py-6 h-20 w-full flex justify-between bg-background"
      :class="{'shadow-md shadow-secondary bg-background': scrollValue > 0 }"
    >
      <AppBrand />
    </div>

    <ul class="
      px-4 sm:px-16 md:px-32
      fixed bottom-0
      w-full h-20
      flex items-center justify-between
      bg-background
      border-t"
    >
      <li>
        <NavigationLink
          :route="Routes.HOME"
        >
          <template #icon="{ isActive }">
            <IconHome
              class="h-6 w-6 sm:h-8 md:w-8 fill-transparent"
              :class="isActive ? 'text-background' : 'text-text'"
            />
          </template>

          <template #title>
            Accueil
          </template>
        </NavigationLink>
      </li>

      <li>
        <NavigationLink :route="Routes.ABOUT">
          <template #icon="{ isActive }">
            <IconPerson
              class="h-6 w-6 sm:h-8 md:w-8"
              :class="isActive ? 'text-background' : 'text-text'"
            />
          </template>

          <template #title>
            A propos
          </template>
        </NavigationLink>
      </li>

      <li>
        <NavigationLink :route="Routes.CONTACT">
          <template #icon="{ isActive }">
            <IconDialog
              class="h-6 w-6 sm:h-8 md:w-8"
              :class="isActive ? 'text-background' : 'text-text'"
            />
          </template>

          <template #title>
            Contact
          </template>
        </NavigationLink>
      </li>

      <li>
        <NavigationLink :route="Routes.PROJECTLIST">
          <template #icon="{ isActive }">
            <IconCube
              class="h-6 w-6 sm:h-8 md:w-8"
              :class="isActive ? 'text-background' : 'text-text'"
            />
          </template>

          <template #title>
            Projets
          </template>
        </NavigationLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useScrollStore } from '@/stores/useScrollStore';
import { storeToRefs } from 'pinia';
import { Routes } from '@/enums/routes';
import NavigationLink from '@/components/NavigationLink.vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconPerson from '@/components/icons/IconPerson.vue';
import IconDialog from '@/components/icons/IconDialog.vue';
import IconCube from '@/components/icons/IconCube.vue';
import AppBrand from '../AppBrand.vue';

export default defineComponent({
  name: 'NavbarMobile',

  components: {
    IconCube,
    IconDialog,
    IconPerson,
    IconHome,
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
