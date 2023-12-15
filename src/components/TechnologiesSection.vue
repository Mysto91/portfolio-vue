<template>
  <div class="space-y-3">
    <div>
      <h3>Frameworks</h3>

      <div class="mt-2">
        <TagsSkeleton v-if="isLoading" />

        <TechnologyTagList
          v-else-if="frameworks.length"
          :technologies="frameworks"
        />

        <NoData v-else />
      </div>
    </div>

    <div>
      <h3>Languages</h3>

      <div class="mt-2">
        <TagsSkeleton v-if="isLoading" />

        <TechnologyTagList
          v-else-if="languages.length"
          :technologies="languages"
        />

        <NoData v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Technology } from '@/interfaces/technology';
import { getTechnologies } from '@/api/technologyApi';
import { findFrameworks, findLanguages } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';
import { useApiRequest } from '@/composables/useApiRequest';
import { CacheKey } from '@/cache/cacheService';
import TechnologyTagList from '@/components/TechnologyTagList.vue';

export default defineComponent({
  name: 'TechnologiesSection',

  components: {
    TechnologyTagList,
    TagsSkeleton,
    NoData,
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
