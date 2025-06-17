import { computed, defineComponent, ref } from 'vue';

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
