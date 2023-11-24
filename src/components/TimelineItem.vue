<template>
    <div class="ml-2 md:ml-4">
        <div class="
          absolute -left-5 md:-left-6
          w-10 h-10 md:w-12 md:h-12
          rounded-full
          drop-shadow-md
          transition ease-in-out duration-200
          group hover:scale-[130%] hover:bg-transparent"
        >
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="
              relative
              w-full h-full
              flex items-center justify-center"
          >
            <span class="absolute z-10">
              <slot name="icon"></slot>
            </span>
          </a>
        </div>
        <h3 class="flex items-center mb-1 text-lg font-semibold">
            <slot name="title"></slot>

            <span
                v-if="isCurrent"
                class="ml-2 bg-black text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
            >
                Actuellement
            </span>

            <!-- TODO Ajouter une lien vers l'expérience en détail  -->
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
          {{ interval }} ({{ periodOfTime }})
        </time>
        <p class="mb-4 text-base font-normal text-gray-500">
             <slot name="content"></slot>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { DateTime, DurationObjectUnits } from 'luxon';

export default defineComponent({
  name: 'TimelineItem',

  props: {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String as PropType<string |null>,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isCurrent = computed<boolean>(() => props.endDate === null);

    const startDate = DateTime.fromISO(props.startDate);
    const endDate = props.endDate ? DateTime.fromISO(props.endDate) : null;

    const formatDate = (date: DateTime): string => date?.toFormat('MMM yyyy', { locale: 'fr' });

    const interval = computed<string>(() => {
      if (!endDate) {
        return `${formatDate(startDate)} - aujourd'hui`;
      }

      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    });

    const periodOfTime = computed<string | null>(() => {
      const endDateTime = endDate !== null ? endDate : DateTime.now();

      const duration: DurationObjectUnits = endDateTime
        .diff(startDate, ['years', 'months'])
        .toObject();

      let yearStr: string | null = null;
      let monthStr: string | null = null;

      if (duration.years) {
        yearStr = `${duration.years} ${duration.years > 1 ? 'ans' : 'an'}`;
      }

      if (duration.months !== undefined && duration.months >= 1) {
        monthStr = `${Math.round(duration.months)} mois`;
      }

      if (!monthStr) {
        return yearStr;
      }

      if (!yearStr) {
        return monthStr;
      }

      return `${yearStr} et ${monthStr}`;
    });

    return {
      isCurrent,
      periodOfTime,
      interval,
    };
  },
});
</script>
