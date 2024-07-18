<template>
    <div>
        <h2 class="text-center">Mes diplômes</h2>

        <FadeTransition>
          <ul
            v-if="isLoading"
            class="lg:grid lg:grid-cols-2 gap-2 space-y-2 lg:space-y-0"
          >
            <li
              v-for="i in 2"
              :key="`skeleton-degree-${i}`"
            >
              <DegreeCardItemSkeleton />
            </li>
          </ul>

          <ul
            v-else-if="!isLoading && degrees.length"
            class="lg:grid lg:grid-cols-2 gap-2 space-y-2 lg:space-y-0"
          >
            <li
              v-for="degree in degrees"
              :key="degree.uuid"
            >
              <DegreeCardItem>
                <template #header>
                  <div class="p-3 flex justify-center">
                    <a
                      href="javascript:void(0)"
                      class="
                      h-24 w-24
                      rounded-full overflow-hidden
                      shadow-md
                      hover:scale-[104%]
                      transition ease-in-out duration-200"
                      @click.stop="openInNewTab(degree.company.url)"
                    >
                      <img
                        :src="`/images/${degree.company.logo}`"
                        :alt="degree.company.logo"
                      >
                    </a>
                  </div>

                  <h4>
                    {{ degree.company.name }}
                  </h4>

                  <p class="text-center font-light text-primary">
                    {{ degree.title }} ({{ getDateYear(degree.graduatedDate) }})
                  </p>
                </template>

                <template #content>
                  <ul class="p-2 flex flex-wrap justify-center gap-2">
                    <li
                      v-for="subject in degree.subjects"
                      :key="`subject-${subject.id}`"
                    >
                      <AppTag class="border-secondary text-text text-sm">
                        {{ subject.name }}
                      </AppTag>
                    </li>
                  </ul>

                  <p>
                    {{ degree.description }}
                  </p>
                </template>
              </DegreeCardItem>
            </li>
          </ul>

          <NoData v-else />
        </FadeTransition>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import DegreeCardItem from '@/components/DegreeCardItem.vue';
import { getDegrees } from '@/api/degreeApi';
import AppTag from '@/components/AppTag.vue';
import { DateTime } from 'luxon';
import { openInNewTab } from '@/utils/window';
import NoData from '@/components/NoData.vue';
import DegreeCardItemSkeleton from '@/components/skeletons/DegreeCardItemSkeleton.vue';
import { CacheKey } from '@/cache/cacheService';
import { Degree } from '@/models/degree';
import FadeTransition from '@/components/FadeTransition.vue';
import { useQuery } from 'vue-query';

export default defineComponent({
  name: 'DegreeSection',

  components: {
    FadeTransition,
    DegreeCardItemSkeleton,
    NoData,
    AppTag,
    DegreeCardItem,
  },

  setup() {
    const { data, isLoading } = useQuery({
      queryKey: [CacheKey.DEGREES],
      queryFn: () => getDegrees(),
    });

    const degrees = computed<Degree[]>(() => data.value?.items ?? []);

    function getDateYear(dateStr: string): string {
      return DateTime.fromISO(dateStr).toFormat('yyyy');
    }

    return {
      degrees,
      getDateYear,
      openInNewTab,
      isLoading,
    };
  },
});
</script>
