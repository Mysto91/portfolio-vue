<template>
  <nav>
    <div
      class="px-7 py-6 h-20 w-full flex justify-between border-b"
      :class="scrollValue > 0 ?'bg-background': 'border-transparent bg-transparent'"
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
          <template #icon>
            <IconHome class="h-6 w-6 sm:h-8 md:w-8 text-current"/>
          </template>

          <template #title>
            Accueil
          </template>
        </NavigationLink>
      </li>

      <li>
        <NavigationLink :route="Routes.ABOUT">
          <template #icon>
            <IconPerson class="h-6 w-6 sm:h-8 md:w-8 text-current"/>
          </template>

          <template #title>
            A propos
          </template>
        </NavigationLink>
      </li>

      <li>
        <NavigationLink :route="Routes.PROJECTLIST">
          <template #icon>
            <IconCube class="h-6 w-6 sm:h-8 md:w-8 text-current"/>
          </template>

          <template #title>
            Projets
          </template>
        </NavigationLink>
      </li>

      <li class="
        flex items-center justify-center
        w-20 sm:w-24 lg:w-32 h-14 sm:h-16 lg:h-12"
      >
        <ContactMenu />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useScrollStore } from '@/stores/useScrollStore';
import { storeToRefs } from 'pinia';
import { Routes } from '@/enums/routes';
import NavigationLink from '@/components/NavigationLink.vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconPerson from '@/components/icons/IconPerson.vue';
import IconCube from '@/components/icons/IconCube.vue';
import ContactMenu from '@/components/mobile/ContactMenu.vue';
import AppBrand from '../AppBrand.vue';

const store = useScrollStore();
const { scrollValue } = storeToRefs(store);
</script>
