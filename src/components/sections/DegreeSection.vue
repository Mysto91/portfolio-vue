<template>
    <div>
        <h2 class="text-center">Mes diplômes</h2>

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
                <ul class="flex flex-wrap justify-center">
                  <li
                    v-for="subject in degree.subjects"
                    :key="`subject-${subject.id}`"
                  >
                    <AppTag class="border-secondary !rounded-full text-text text-sm">
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
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DegreeCardItem from '@/components/DegreeCardItem.vue';
import { Degree } from '@/interfaces/degree';
import { getDegrees } from '@/api/degreeApi';
import AppTag from '@/components/AppTag.vue';
import { DateTime } from 'luxon';
import { openInNewTab } from '@/utils/window';
import NoData from '@/components/NoData.vue';
import DegreeCardItemSkeleton from '@/components/skeletons/DegreeCardItemSkeleton.vue';
import { useLoading } from '@/composables/useLoading';

export default defineComponent({
  name: 'DegreeSection',

  components: {
    DegreeCardItemSkeleton,
    NoData,
    AppTag,
    DegreeCardItem,
  },

  setup() {
    const degrees = ref<Degree[]>([]);

    const {
      isLoading,
      startLoading,
      stopLoading,
    } = useLoading();

    async function setDegrees(): Promise<void> {
      startLoading();
      degrees.value = await getDegrees();
      stopLoading();
    }

    function getDateYear(dateStr: string): string {
      return DateTime.fromISO(dateStr).toFormat('yyyy');
    }

    setDegrees();

    return {
      degrees,
      getDateYear,
      openInNewTab,
      isLoading,
    };
  },
});
</script>
