export class PokemonService {
  private static readonly BASE_URL = 'https://pokeapi.co/api/v2';
  private static readonly POKEMON_COUNT = 1302;

  static async getRandomPokemon() {
    const randomLimit = Math.floor(Math.random() * 100);
    const randomOffset = Math.floor(Math.random() * (this.POKEMON_COUNT - randomLimit));

    const response = await fetch(`${this.BASE_URL}/pokemon?limit=${randomLimit}&offset=${randomOffset}`);
    const data = await response.json();

    const randomPokemon = data.results[Math.floor(Math.random() * data.results.length)];
    return randomPokemon;
  }
}