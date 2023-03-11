<template>
    <button class="w-12 h-12 flex items-center justify-center transition-opacity duration-300 hover:opacity-50">
        <img
            src="https://uploads-ssl.webflow.com/5fa25266badbdb239c79ef86/5fa252663b6e7c73319c0c7b_menu-icon.png"
            width="22"
            alt="menu icon"
        >
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuButton',
});
</script>
