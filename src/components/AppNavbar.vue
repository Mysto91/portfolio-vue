<template>
    <nav class="px-12 py-5 bg-transparent font-poppins">
        <div class="h-12 flex justify-between">
            <a
                href="/"
                class="flex items-center justify-center text-lg font-semibold"
            >
                Etienne TRAN
            </a>
            <ul class="flex items-center justify-center space-x-6">
                <li>
                    <NavigationLink url="/about">
                        About
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink url="/">
                            Contact
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        url="/"
                        class="px-6 py-4 bg-black text-white rounded-lg"
                    >
                        View Work
                    </NavigationLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationLink from './NavigationLink.vue';

export default defineComponent({
  name: 'AppNavbar',

  components: {
    NavigationLink,
  },
});
</script>
