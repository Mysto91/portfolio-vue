<template>
    <div>
        <h2 class="text-center">Mes diplômes</h2>

        <ul class="lg:grid lg:grid-cols-2 gap-2 space-y-2 lg:space-y-0">
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

export default defineComponent({
  name: 'DegreeSection',

  components: {
    AppTag,
    DegreeCardItem,
  },

  setup() {
    const degrees = ref<Degree[]>([]);
    const isLoading = ref<boolean>(false);

    async function setDegrees(): Promise<void> {
      isLoading.value = true;
      degrees.value = await getDegrees();
      isLoading.value = false;
    }

    function getDateYear(dateStr: string): string {
      return DateTime.fromISO(dateStr).toFormat('yyyy');
    }

    setDegrees();

    return {
      degrees,
      getDateYear,
      openInNewTab,
    };
  },
});
</script>
