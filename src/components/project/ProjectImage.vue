<template>
    <div :style="style" class="h-56 rounded-2xl border border-black bg-auto bg-cover" />
</template>

<script lang="ts">
import {
  computed, defineComponent, PropType, ref,
} from 'vue';
import { Url } from '@/components/types/url';

interface Style {
  backgroundImage: string;
}

export default defineComponent({
  name: 'ProjectImage',

  props: {
    imageUrl: {
      type: String as PropType<Url>,
      required: true,
    },
  },

  setup(props) {
    const imageFound = ref<boolean>(false);

    async function fetchImage(): Promise<void> {
      try {
        const { ok } = await fetch(props.imageUrl);
        imageFound.value = ok;
      } catch (e) {
        imageFound.value = false;
      }
    }

    fetchImage();

    const style = computed<Style>(() => ({
      backgroundImage: imageFound.value === true ? `url(${props.imageUrl})` : 'url(/images/default-placeholder.png)',
    }));

    return {
      style,
    };
  },
});
</script>
