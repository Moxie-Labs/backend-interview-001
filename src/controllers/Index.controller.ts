import { Context } from "hono";
import { PokemonService } from "@/services/Pokemon.service";

export class IndexController {
  static async index(c: Context) {
    const randomPokemon = await PokemonService.getRandomPokemon();
    return c.json({ message: "Hello there", randomPokemon: randomPokemon.name });
  }
}
