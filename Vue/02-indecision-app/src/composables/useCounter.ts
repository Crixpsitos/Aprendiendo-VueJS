import { computed, ref } from 'vue';

export const useCounter = (value: number) => {
  const count = ref(value);
  const square = computed(() => count.value * count.value);

  return {
    count,
    square,
  };
};
