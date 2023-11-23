<template>
    <div :style="imageStyle" class="h-56 rounded-2xl border drop-shadow-xl bg-auto bg-cover" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Url } from '@/types/request';
import { useImageStyle } from '@/composables/useStyle';

export default defineComponent({
  name: 'ProjectImage',

  props: {
    imageUrl: {
      type: String as PropType<Url | null>,
      required: true,
    },
  },

  setup(props) {
    const { imageStyle } = useImageStyle({ imageUrl: props.imageUrl });

    return {
      imageStyle,
    };
  },
});
</script>
