<template>
    <nav class="px-12 py-5 bg-transparent">
        <div class="h-12 flex justify-between">
            <AppBrand />
            <ul class="flex items-center justify-center space-x-6">
                <li>
                    <NavigationLink url="/about">
                        About
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink url="/contact">
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
});
</script>
