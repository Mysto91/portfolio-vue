<template>
    <div>
        <NavigationLinkMobile url="/about">
            About
        </NavigationLinkMobile>
        <NavigationLinkMobile url="/contact">
            Contact
        </NavigationLinkMobile>
        <div class="flex items-center justify-center" >
            <ViewWorkLink />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ViewWorkLink from '../ViewWorkLink.vue';
import NavigationLinkMobile from './NavigationLinkMobile.vue';

export default defineComponent({
  name: 'MenuContent',

  components: {
    NavigationLinkMobile,
    ViewWorkLink,
  },
});
</script>
