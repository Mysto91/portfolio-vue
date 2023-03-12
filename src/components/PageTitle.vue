<template>
    <h1 class="py-3 font-medium">
        {{ title }}
    </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageTitle',

    props: {
        title: {
            type: String,
            required: true,
        },
    },
});
</script>
