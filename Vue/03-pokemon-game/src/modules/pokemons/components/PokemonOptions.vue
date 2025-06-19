<script setup lang="ts">
import type { Pokemon } from '../interface';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  selectedId: number | null;
  correctIdAnswer: number;
}

const props = defineProps<Props>();

defineEmits<{
  selectedOptions: [id: number];
}>();

function buttonClass(id: number) {
  if (props.selectedId == null) return '';
  if (id === props.correctIdAnswer) {
    return 'bg-green-500 text-white';
  }
  if (id === props.selectedId && props.selectedId !== props.correctIdAnswer) {
    return 'bg-red-500 text-white'; 
  }
  return '';
}
</script>
<template>
  <section class="mt-5">
    <button
      v-for="option in options"
      :key="option.id"
      @click="$emit('selectedOptions', option.id)"
      :disabled="blockSelection"
      :class="buttonClass(option.id)"
    >
      <span>{{ option.name }}</span>
    </button>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

button {
  @apply flex flex-col shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition capitalize duration-300 ease-in-out;
}
</style>
