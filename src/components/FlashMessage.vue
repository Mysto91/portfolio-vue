<template>
  <div
    v-if="flashMessage"
    :class="[
      'w-3/4 max-w-[500px] rounded-lg drop-shadow-2xl flex transition ease-in-out duration-300 text-black',
      colorStyle.backgroundColor,
    ]"
  >
    <span :class="['w-3 rounded-l-lg', colorStyle.span.backgroundColor]" />

    <span class="w-14 flex items-center justify-center">
      <component
        :is="getIcon().component"
        :class="[
          'h-7 w-7',
          getIcon().fill
        ]"
      />
    </span>

    <div class="ml-2 py-2 flex flex-col">
      <h1 class="my-1 font-semibold text-sm">
        {{ getTitle() }}
      </h1>

      <p class="text-gray-500 text-xs">
        {{ flashMessage.message }}
      </p>
    </div>

    <div class="flex flex-grow items-center justify-end">
      <button
        class="mr-3 h-7 w-7 flex items-center justify-center"
        @click="clearMessage"
      >
        <IconClose :class="colorStyle.closeButton.color" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, computed, PropType, Component,
} from 'vue';
import { StatusEnums } from '@/enums/statusEnums';
import { FlashMessage } from '@/interfaces/flashMessageInterface';
import { Style } from '@/interfaces/style';
import IconSuccess from '@/components/icons/IconSuccess.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconError from '@/components/icons/IconError.vue';

const props = defineProps({
  flashMessage: {
    type: Object as PropType<FlashMessage | null>,
    required: true,
  },
  clearMessage: {
    type: Function,
    required: true,
  },
});

interface StatusComponentStyle extends Style {
  span: Style
  closeButton: Style
}

interface StatusComponent {
  title: string
  colorStyle: StatusComponentStyle
  icon: {
    fill: string
    component: Component
  }
}

const statusMap = new Map<StatusEnums, StatusComponent>([
  [
    StatusEnums.ERROR,
    {
      title: 'Erreur',
      colorStyle: {
        backgroundColor: 'bg-red-100',
        span: {
          backgroundColor: 'bg-red-500',
        },
        closeButton: {
          color: 'text-red-500',
        },
      },
      icon: {
        fill: 'fill-red-500',
        component: IconError,
      },
    },
  ],
  [
    StatusEnums.SUCCESS,
    {
      title: 'Succès',
      colorStyle: {
        backgroundColor: 'bg-green-100',
        span: {
          backgroundColor: 'bg-green-500',
        },
        closeButton: {
          color: 'text-green-500',
        },
      },
      icon: {
        fill: 'fill-green-500',
        component: IconSuccess,
      },
    },
  ],
]);

const colorStyle = computed<StatusComponentStyle | null>(() => {
  if (!props.flashMessage) {
    return null;
  }

  return statusMap.get(props.flashMessage.status)?.colorStyle ?? null;
});

function getTitle(): string {
  if (!props.flashMessage) {
    return '';
  }

  return statusMap.get(props.flashMessage.status)?.title ?? '';
}

function getIcon(): { fill: string, component: Component } | null {
  if (!props.flashMessage) {
    return null;
  }

  return statusMap.get(props.flashMessage.status)?.icon ?? null;
}
</script>
