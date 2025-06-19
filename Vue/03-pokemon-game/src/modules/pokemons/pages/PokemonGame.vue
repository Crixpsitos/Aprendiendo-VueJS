<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interface';

const {
  gameStatus,
  isLoading,
  randomPokemon,
  pokemonsOptions: options,
  selectedId,
  checkAnser,
} = usePokemonGame();
</script>
<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center"
  >
    <h1 class="text-3xl font-bold underline">Pokemon Game</h1>
    <h3 class="animate-pulse text-xl font-semibold">Cargando Pokémons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quien es este Pokémon?</h1>
    <h3 class="capitalize">{{ gameStatus }}</h3>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemonId="randomPokemon.id"
      :showPokemon="gameStatus !== GameStatus.playing"

    />
    <PokemonOptions
    :selected-id="selectedId"
    :correct-id-answer="randomPokemon.id"
    :blockSelection="gameStatus !== GameStatus.playing"
    :options="options"
    @selected-options="checkAnser" />
  </section>
</template>

<style scoped></style>
