<template>
  <div :class="`${dimensionClass} rounded-full bg-gray-300 animate-pulse`"/>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Size } from '@/enums/size';

export default defineComponent({
  name: 'CircleSkeleton',

  props: {
    size: {
      type: String as PropType<Size>,
      default: Size.S,
    },
  },

  setup(props) {
    const dimensionClass = computed<string>(() => {
      switch (props.size) {
        case Size.XS:
          return 'w-8 h-8';
        case Size.S:
          return 'w-12 h-12';
        case Size.M:
          return 'w-20 h-20';
        case Size.L:
          return 'w-30 h-30';
        default:
          return 'w-12 h-12';
      }
    });

    return {
      dimensionClass,
    };
  },
});
</script>
