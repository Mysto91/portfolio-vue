<template>
  <ul class="flex flex-wrap gap-2.5">
    <li
      v-for="technology in technologies"
      :key="`technology-${technology.id}`"
      class="flex space-x-2"
    >
      <AppTag>
        <template #default>
          <div class="flex items-center space-x-2">
            <TechnologyIcon class="h-5 w-5" :technology="technology.name" />

            <p :class="textClass">{{ technology.name }}</p>
          </div>
        </template>
      </AppTag>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppTag from '@/components/AppTag.vue';
import { Technology } from '@/interfaces/technology';
import TechnologyIcon from '@/components/TechnologyIcon.vue';

export default defineComponent({
  name: 'TechnologyTagList',

  components: {
    TechnologyIcon,
    AppTag,
  },

  props: {
    technologies: {
      type: Array as PropType<Technology[]>,
      required: true,
    },
    textClass: {
      type: String,
      default: 'text-base',
    },
  },
});
</script>
