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

        <NavigationLinkMobile
          :route="Routes.PROJECTLIST"
          @click="$emit('closeMenu')"
        >
          Mes projets
        </NavigationLinkMobile>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Routes } from '@/enums/routes';
import NavigationLinkMobile from './NavigationLinkMobile.vue';

export default defineComponent({
  name: 'MenuContent',

  emits: ['closeMenu'],

  components: {
    NavigationLinkMobile,
  },

  setup() {
    return {
      Routes,
    };
  },
});
</script>
