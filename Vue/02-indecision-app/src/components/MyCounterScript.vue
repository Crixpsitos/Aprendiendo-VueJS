<script lang="ts">
import { ref, computed, defineComponent } from 'vue';

// interface Props {
//   value: number;
// }

// const { value } = defineProps<Props>();

// const count = ref(value);
// const square = computed(() => count.value * count.value);

// const increment = () => {
//   count.value++;
// };

// const decrement = () => {
//   if (count.value === 0) return;
//   count.value--;
// };

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },

  setup({ value }) {
    const count = ref(value);
    const square = computed(() => count.value * count.value);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      if (count.value === 0) return;
      count.value--;
    };

    return {
      count,
      square,
      increment,
      decrement,
    };
  },
});
</script>

<template>
  <section>
    <h3>Counter: {{ count }}</h3>
    <h3>square: {{ square }}</h3>

    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
