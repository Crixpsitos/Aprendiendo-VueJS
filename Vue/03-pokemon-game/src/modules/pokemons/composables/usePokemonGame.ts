import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon } from '../interface';
import { getPokemons } from '../helpers/fetchPokemon';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);
  const selectedId = ref<number | null>(null);
  const isLoading = computed(() => pokemons.value.length === 0);
  const randomPokemon = computed(
    () => pokemonsOptions.value[Math.floor(Math.random() * pokemonsOptions.value.length)],
  );


  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnser = (id: number) => {
    const hasWon = randomPokemon.value.id === id;
    selectedId.value = id;
    if (hasWon) {
      gameStatus.value = GameStatus.won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { x: 0.5, y: 0.5 },
      });

      return;
    }

    gameStatus.value = GameStatus.lost;

    return;
  };

  onMounted(async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const pokemonsResponse = await getPokemons();
    pokemons.value = pokemonsResponse;
    getNextOptions();
  });

  return {
    gameStatus,
    isLoading,
    pokemons,
    pokemonsOptions,
    randomPokemon,
    selectedId,

    //Methods
    getNextOptions,
    checkAnser,
  };
};
