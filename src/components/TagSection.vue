<template>
    <div>
        <div class="flex flex-wrap">
            <AppTag
                v-for="(tag, index) in tags"
                v-bind:key="index"
                :name="tag"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppTag from './AppTag.vue';

export default defineComponent({
    name: "TagSection",

    components: { 
        AppTag,
    },

    setup() {
        const tags: string[] = [
            "ui design",
            "ux-design",
            "prototyping",
            "branding",
            "html/css",
            "wireframing",
            "information architecture",
            "user search",
            "user interviews",
            "leadership",
            "figma",
            "adobe suite",
        ];
        return {
            tags,
        };
    },
});
</script>
