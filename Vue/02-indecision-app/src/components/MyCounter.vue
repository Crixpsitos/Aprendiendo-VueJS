<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}

const { value } = defineProps<Props>();

// const count = ref(value);
// const square = computed(() => count.value * count.value);

const {count, square} = useCounter(value);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value === 0) return;
  count.value--;
};
</script>

<template>
  <section>
    <h3>Counter: {{ count }}</h3>
    <h3>square: {{ square }}</h3>

    <div class="space-x-4">
      <button class="btn" @click="increment">+1</button>
      <button class="btn" @click="decrement">-1</button>
    </div>
  </section>
</template>
