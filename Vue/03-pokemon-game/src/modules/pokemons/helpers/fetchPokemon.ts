import { pokemonApi } from "../api/pokemonApi";
import type { Pokemon, PokemonListResponse } from "../interface";

export const getPokemons = async (): Promise<Pokemon[]> => {
  const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

  const pokemonArray: Pokemon[] = response.data.results.map((pokemon) => {
    const urlParts = pokemon.url.split('/');
    const id = urlParts[urlParts.length - 2];
    return {
      name: pokemon.name,
      id: parseInt(id),
    };
  });

  return pokemonArray.sort(() => Math.random() - 0.5);
};
