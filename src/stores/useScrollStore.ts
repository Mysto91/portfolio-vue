import { defineStore } from 'pinia';
import { ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useScrollStore = defineStore('scroll', () => {
  const scrollValue = ref<number>(0);

  function setScrollValue(newScrollValue: number): void {
    scrollValue.value = newScrollValue;
  }

  return {
    scrollValue,
    setScrollValue,
  };
});
