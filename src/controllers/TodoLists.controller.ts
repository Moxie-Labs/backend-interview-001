import { Context } from "hono";
import { db } from "@/services/Database.service";

export class TodoListsController {
  static async create(c: Context) {
    const { name } = await c.req.json();

    const list = db.query(`INSERT INTO lists (name) VALUES (?);`).run(name);

    if (!list) {
      return c.json({ error: "Failed to create list" }, 500);
    }

    return c.json({ message: "Created list successfully" });
  }

  static async get(c: Context) {
    const lists = db.query(`SELECT * FROM lists;`).all();

    return c.json({ lists });
  }
}