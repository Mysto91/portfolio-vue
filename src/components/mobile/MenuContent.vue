<template>
    <div class="flex flex-col space-y-3">
        <NavigationLinkMobile
            url="/about"
            @click="$emit('closeMenu')"
        >
            About
        </NavigationLinkMobile>
        <NavigationLinkMobile
            url="/contact"
            @click="$emit('closeMenu')"
        >
            Contact
        </NavigationLinkMobile>
        <div class="flex items-center justify-center" >
            <ViewWorkLink @click="$emit('closeMenu')" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ViewWorkLink from '../ViewWorkLink.vue';
import NavigationLinkMobile from './NavigationLinkMobile.vue';

export default defineComponent({
  name: 'MenuContent',

  emits: ['closeMenu'],

  components: {
    NavigationLinkMobile,
    ViewWorkLink,
  },
});
</script>
