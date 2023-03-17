<template>
    <div class="ml-2 md:ml-4">
        <div class="
          absolute -left-5 md:-left-6
          w-10 h-10 md:w-12 md:h-12
          rounded-full  bg-blue-100
          transition ease-in-out duration-200
          group hover:scale-150 hover:bg-transparent"
        >
          <span class="
            w-full h-full
            rounded-full border-blue-100 border-0 group-hover:border-2
            flex items-center justify-center
            transition ease-in-out duration-200"
          >
            <slot name="icon"></slot>
          </span>
        </div>
        <h3 class="flex items-center mb-1 text-lg font-semibold">
            <slot name="title"></slot>
            <span
                v-if="isCurrent"
                class="ml-2 bg-black text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
            >
                Current
            </span>
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
      type: Object as PropType<DateTime>,
      required: true,
    },
    endDate: {
      type: Object as PropType<DateTime | null>,
      default: null,
    },
  },
  setup(props) {
    const isCurrent = computed<boolean>(() => props.endDate === null);

    const formatDate = (date: DateTime): string => date?.toFormat('MMM yyyy', { locale: 'fr' });

    const interval = computed<string>(() => {
      if (!props.endDate) {
        return `${formatDate(props.startDate)} - aujourd'hui`;
      }

      return `${formatDate(props.startDate)} - ${formatDate(props.endDate)}`;
    });

    const periodOfTime = computed<string | null>(() => {
      const endDate: DateTime = props.endDate ? props.endDate : DateTime.now();

      const duration: DurationObjectUnits = endDate
        .diff(props.startDate, ['years', 'months'])
        .toObject();

      let yearStr: string | null = null;
      let monthStr: string | null = null;

      if (duration.years !== 0) {
        yearStr = `${duration.years} ans`;
      }

      if (duration.months !== 0) {
        monthStr = `${Math.round(duration.months as number)} mois`;
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
