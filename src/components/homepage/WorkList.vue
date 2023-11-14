<template>
  <section class="
    lg:grid lg:grid-cols-2
    space-y-7 lg:space-y-0 lg:gap-16
  ">
    <ul
        v-for="workItem in workItems"
        v-bind:key="workItem.id"
    >
      <li>
        <WorkItem :url="workItem.url">
          <template #title>
            {{ workItem.title }}
          </template>
          <template #description>
            {{ workItem.description }}
          </template>
          <template #technologies>
            <ul class="flex justify-end space-x-2">
              <li v-if="hasTechnology(workItem, Technology.VUE)">
                <IconVue />
              </li>
              <li v-if="hasTechnology(workItem, Technology.REACT)">
                <IconReact />
              </li>
              <li v-if="hasTechnology(workItem, Technology.TYPESCRIPT)">
                <IconTypescript />
              </li>
              <li v-if="hasTechnology(workItem, Technology.JAVASCRIPT)">
                <IconJavascript />
              </li>
            </ul>
          </template>
        </WorkItem>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkItem from '@/components/work/WorkItem.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconReact from '@/components/icons/IconReact.vue';
import IconTypescript from '@/components/icons/IconTypescript.vue';
import IconJavascript from '@/components/icons/IconJavascript.vue';

enum Technology {
  REACT = 'react',
  VUE = 'vue',
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  TAILWINDCSS = 'tailwindcss',
}

interface Workitem {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: Technology[]
}

export default defineComponent({
  name: 'WorkList',

  components: {
    IconJavascript,
    IconTypescript,
    IconReact,
    IconVue,
    WorkItem,
  },

  setup() {
    const workItems: Workitem[] = [
      {
        id: 1,
        title: 'Calcul cote',
        url: '/works/1',
        description: 'un projet de paris sportifs',
        technologies: [Technology.REACT, Technology.JAVASCRIPT],
      },
      {
        id: 2,
        title: 'Calcul cote v2',
        url: '/works/2',
        description: 'la refonte du projet de paris sportifs',
        technologies: [Technology.REACT, Technology.TYPESCRIPT, Technology.TAILWINDCSS],
      },
      {
        id: 3,
        title: 'Portfolio',
        url: '/works/2',
        description: 'Un premier portfolio en react',
        technologies: [Technology.REACT, Technology.JAVASCRIPT],
      },
    ];

    function hasTechnology(workItem: Workitem, technology: Technology): boolean {
      return workItem.technologies.some((workItemTechnology) => workItemTechnology === technology);
    }

    return {
      workItems,
      hasTechnology,
      Technology,
    };
  },
});
</script>
