<template>
    <div class="flex flex-col space-y-3">
        <NavigationLinkMobile
            :route="Routes.ABOUT"
            @click="$emit('closeMenu')"
        >
            À propos
        </NavigationLinkMobile>

        <NavigationLinkMobile
            :route="Routes.CONTACT"
            @click="$emit('closeMenu')"
        >
            Contact
        </NavigationLinkMobile>

        <div class="flex items-center justify-center" >
            <ViewProjectLink @click="$emit('closeMenu')" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Routes } from '@/enums/routes';
import ViewProjectLink from '../ViewProjectLink.vue';
import NavigationLinkMobile from './NavigationLinkMobile.vue';

export default defineComponent({
  name: 'MenuContent',

  emits: ['closeMenu'],

  components: {
    NavigationLinkMobile,
    ViewProjectLink,
  },

  setup() {
    return {
      Routes,
    };
  },
});
</script>
