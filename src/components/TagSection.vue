<template>
  <div class="space-y-3">
    <div>
      <h3>Frameworks</h3>

      <div class="mt-2">
        <TagsSkeleton v-if="isLoading" />

        <ul
          v-else-if="frameworks.length"
          class="flex flex-wrap gap-2.5"
        >
          <li
            v-for="framework in frameworks"
            :key="`framework-${framework.id}`"
          >
            <AppTag>
              <template #default>
                <div class="flex items-center space-x-2">
                  <TechnologyIcon class="h-5 w-5" :technology="framework.name" />

                  <p class="text-base">{{ framework.name }}</p>
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
        <TagsSkeleton v-if="isLoading" />

        <ul
          v-else-if="languages.length"
          class="flex flex-wrap gap-2.5"
        >
          <li
            v-for="language in languages"
            :key="`language-${language.id}`"
          >
            <AppTag>
              <template #default>
                <div class="flex items-center space-x-2">
                  <TechnologyIcon class="h-5 w-5" :technology="language.name" />
                  <p class="text-base">{{ language.name }}</p>
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
import { computed, defineComponent } from 'vue';
import { Technology } from '@/interfaces/technology';
import { getTechnologies } from '@/api/technologyApi';
import TechnologyIcon from '@/components/TechnologyIcon.vue';
import { findFrameworks, findLanguages } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';
import { useApiRequest } from '@/composables/useApiRequest';
import { CacheKey } from '@/cache/cacheService';
import AppTag from './AppTag.vue';

export default defineComponent({
  name: 'TagSection',

  components: {
    TagsSkeleton,
    NoData,
    TechnologyIcon,
    AppTag,
  },

  setup() {
    const { result: technologies, isLoading } = useApiRequest(
      {
        cacheKey: CacheKey.ALL_TECHNOLOGIES,
        apiCallback: getTechnologies,
      },
    );

    const frameworks = computed<Technology[]>(() => findFrameworks(technologies.value as Technology[]));
    const languages = computed<Technology[]>(() => findLanguages(technologies.value as Technology[]));

    return {
      frameworks,
      languages,
      isLoading,
    };
  },
});
</script>
