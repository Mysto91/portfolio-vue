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
        <WorkItem :url="`/works/${workItem.id}`">
          <template #title>
            {{ workItem.title }}
          </template>
          <template #description>
            {{ workItem.description }}
          </template>
          <template #technologies>
            <ul class="flex justify-end space-x-2">
              <li
                v-for="framework in workItem.technologies.frameworks"
                :key="framework"
              >
                <TechnologyIcon :technology="framework"/>
              </li>

              <li
                v-for="language in workItem.technologies.languages"
                :key="language"
              >
                <TechnologyIcon :technology="language"/>
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
import { getAllWorks } from '@/services/workService';
import { Framework } from '@/enums/framework';
import { Language } from '@/enums/language';
import { Workitem } from '@/interfaces/workitem';
import TechnologyIcon from '@/components/TechnologyIcon.vue';

export default defineComponent({
  name: 'WorkList',

  components: {
    TechnologyIcon,
    WorkItem,
  },

  setup() {
    function hasFramework(workItem: Workitem, searchedFramework: Framework): boolean {
      return workItem.technologies.frameworks.some((framework) => framework === searchedFramework);
    }

    function hasLanguage(workItem: Workitem, searchedLanguage: Language): boolean {
      return workItem.technologies.languages.some((language) => language === searchedLanguage);
    }

    return {
      getAllWorks,
      hasFramework,
      hasLanguage,
      Framework,
      Language,
    };
  },
});
</script>
