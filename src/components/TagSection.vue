<template>
  <div class="space-y-3">
    <div>
      <h3>Frameworks</h3>

      <div class="mt-2">
        <TextSkeleton v-if="isLoading" />

        <ul
          v-else-if="frameworks.length"
          class="flex flex-wrap"
        >
          <li
            v-for="framework in frameworks"
            :key="`framework-${framework.id}`"
          >
            <AppTag>
              <template #default>
                <div class="flex items-center space-x-2">
                  <TechnologyIcon class="h-5 w-5" :technology="framework.name" />
                  <p class="text-lg">{{ framework.name }}</p>
                </div>
              </template>
            </AppTag>
          </li>
        </ul>

        <NoData v-else />
      </div>

    </div>

    <div>
      <h3>Languages</h3>

      <div class="mt-2">
        <TextSkeleton v-if="isLoading" />

        <ul
          v-else-if="languages.length"
          class="flex flex-wrap"
        >
          <li
            v-for="language in languages"
            :key="`language-${language.id}`"
          >
            <AppTag>
              <template #default>
                <div class="flex items-center space-x-2">
                  <TechnologyIcon class="h-5 w-5" :technology="language.name" />
                  <p class="text-lg">{{ language.name }}</p>
                </div>
              </template>
            </AppTag>
          </li>
        </ul>

        <NoData v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { Technology } from '@/interfaces/projectItem';
import { getTechnologies } from '@/api/technologyApi';
import TechnologyIcon from '@/components/TechnologyIcon.vue';
import { findFrameworks, findLanguages } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import TextSkeleton from '@/components/skeletons/TextSkeleton.vue';
import AppTag from './AppTag.vue';

export default defineComponent({
  name: 'TagSection',

  components: {
    TextSkeleton,
    NoData,
    TechnologyIcon,
    AppTag,
  },

  setup() {
    const technologies = ref<Technology[]>([]);
    const isLoading = ref<boolean>(false);

    async function setTechnologies(): Promise<void> {
      isLoading.value = true;
      technologies.value = await getTechnologies();
      isLoading.value = false;
    }

    setTechnologies();

    const frameworks = computed<Technology[]>(() => findFrameworks(technologies.value));
    const languages = computed<Technology[]>(() => findLanguages(technologies.value));

    return {
      frameworks,
      languages,
      isLoading,
    };
  },
});
</script>
