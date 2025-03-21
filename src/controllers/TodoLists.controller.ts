import { Context } from "hono";
import { db } from "@/services/Database.service";
import { PokemonService } from "@/services/Pokemon.service";

export class TodoListsController {
  static async create(c: Context) {
    const { name } = await c.req.json();

    let label = name;

    if (!label) {
      const randomPokemon = await PokemonService.getRandomPokemon();
      label = randomPokemon.name;
    }

    const list = db.query(`INSERT INTO lists (name) VALUES (?);`).run(label);

    if (!list) {
      return c.json({ error: "Failed to create list" }, 500);
    }

    return c.json({ message: "Created list successfully" });
  }

  static async get(c: Context) {
    const lists = db.query(`SELECT * FROM lists;`).all();

    return c.json({ lists });
  }

  static async updateListName(c: Context) {
    const { name } = await c.req.json();
    const id = c.req.param('id');

    const list = db.query(`UPDATE lists SET name = ? WHERE id = ?;`).run(name, id);

    if (!list) {
      return c.json({ error: "Failed to update list" }, 500);
    }

    return c.json({ message: "List updated successfully" });
  }
}