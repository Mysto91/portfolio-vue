<template>
  <ul class="flex flex-wrap gap-2.5">
    <li
      v-for="technology in technologies"
      :key="`technology-${technology.id}`"
      class="flex space-x-2"
    >
      <AppTag :class="{ 'border-secondary': isLikeSearch(technology) }">
        <template #default>
          <div class="flex items-center space-x-2">
            <TechnologyIcon class="h-5 w-5" :technology="technology.name" />

            <p
              :class="[
                textClass,
                isLikeSearch(technology) ? 'font-bold' : ''
               ]"
            >
              {{ technology.name }}
            </p>
          </div>
        </template>
      </AppTag>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import AppTag from '@/components/AppTag.vue';
import { Technology } from '@/models/technology';
import TechnologyIcon from '@/components/TechnologyIcon.vue';

const props = defineProps({
  technologies: {
    type: Array as PropType<Technology[]>,
    required: true,
  },
  textClass: {
    type: String,
    default: 'text-base',
  },
  search: {
    type: String,
    default: null,
  },
});

function isLikeSearch(technology: Technology): boolean {
  return technology.name.toLowerCase().includes(props.search);
}
</script>
