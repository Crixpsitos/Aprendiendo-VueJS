<script setup lang="ts">
import { computed } from 'vue';

  const props = withDefaults(defineProps<{
    pokemonId: number,
    showPokemon: boolean,
    
  }>(), {
    showPokemon: false
  })

  const url = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`)

</script>
<template>
  <section>
    <img
      :src="url"
      alt="Pokemon Picture"
      :class="['fade-in', {'brightness-0': !showPokemon, 'brightness-100': showPokemon }]"
    />
  </section>
</template>


<style scoped>
  img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;

  }
</style>
