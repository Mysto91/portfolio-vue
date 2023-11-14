<template>
  <section>
    <ul class="
      lg:grid lg:grid-cols-2
      space-y-7 lg:space-y-0 lg:gap-16"
    >
      <li
        v-for="workItem in getAllWorks()"
        v-bind:key="workItem.id"
      >
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
import { Technology } from '@/enums/technology';
import { Workitem } from '@/interfaces/workitem';
import { getAllWorks } from '@/services/workService';

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
    function hasTechnology(workItem: Workitem, technology: Technology): boolean {
      return workItem.technologies.some((workItemTechnology) => workItemTechnology === technology);
    }

    return {
      getAllWorks,
      hasTechnology,
      Technology,
    };
  },
});
</script>
