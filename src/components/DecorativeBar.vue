<template>
    <svg
        class="min-h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="url(#grad1)"
    >
        <defs>
            <linearGradient
                id="grad1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
            >
            <stop
                offset="0%"
                style="stop-color:#1c92d2;stop-opacity:1"
            />
            <stop
                offset="100%"
                style="stop-color:#f2fcfe;stop-opacity:1"
            />
            </linearGradient>
        </defs>
        <!-- eslint-disable-next-line -->
        <path d="M0,224L80,218.7C160,213,320,203,480,218.7C640,235,800,277,960,266.7C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DecorativeBar',
});
</script>
