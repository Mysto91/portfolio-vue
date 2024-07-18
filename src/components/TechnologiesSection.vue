<template>
  <div class="space-y-3">
    <div>
      <h3>Frameworks</h3>

      <FadeTransition class="mt-2">
        <TagsSkeleton v-if="isLoading" />

        <TechnologyTagList
          v-else-if="frameworks.length"
          :technologies="frameworks"
        />

        <NoData v-else />
      </FadeTransition>
    </div>

    <div>
      <h3>Languages</h3>

      <FadeTransition class="mt-2">
        <TagsSkeleton v-if="isLoading" />

        <TechnologyTagList
          v-else-if="languages.length"
          :technologies="languages"
        />

        <NoData v-else />
      </FadeTransition>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Technology } from '@/models/technology';
import { getTechnologies } from '@/api/technologyApi';
import { findFrameworks, findLanguages } from '@/utils/search';
import NoData from '@/components/NoData.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';
import { CacheKey } from '@/cache/cacheService';
import TechnologyTagList from '@/components/TechnologyTagList.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import { useQuery } from 'vue-query';

export default defineComponent({
  name: 'TechnologiesSection',

  components: {
    FadeTransition,
    TechnologyTagList,
    TagsSkeleton,
    NoData,
  },

  setup() {
    const { data: technologies, isLoading } = useQuery({
      queryKey: [CacheKey.TECHNOLOGIES],
      queryFn: () => getTechnologies(),
    });

    const frameworks = computed<Technology[]>(() => findFrameworks(technologies.value?.items ?? []));
    const languages = computed<Technology[]>(() => findLanguages(technologies.value?.items ?? []));

    return {
      frameworks,
      languages,
      isLoading,
    };
  },
});
</script>
