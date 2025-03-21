import { Context } from "hono";
import { db } from "@/services/Database.service";

export class TodoItemsController {
  static async create(c: Context) {
    const listId = c.req.param('listId');
    const { label } = await c.req.json();

    const list = db.query(`INSERT INTO items (label, list_id) VALUES (?, ?);`).run(label, listId);

    if (!list) {
      return c.json({ error: "Failed to create list" }, 500);
    }

    return c.json({ message: "Created item successfully" });
  }

  static async getItemsByListId(c: Context) {
    const listId = c.req.param('listId');
    const items = db.query(`SELECT * FROM items WHERE list_id = ?;`).all(listId);

    return c.json({ items });
  }

  static async updateItem(c: Context) {
    const itemId = c.req.param('itemId');
    const { label, completed } = await c.req.json();

    const item = db.query(`UPDATE items SET label = ?, completed = ? WHERE id = ?;`).run(label, completed, itemId);

    if (!item) {
      return c.json({ error: "Failed to update item" }, 500);
    }

    return c.json({ message: "Updated item successfully" });
  }

  static async deleteItem(c: Context) {
    const itemId = c.req.param('itemId');
    const item = db.query(`DELETE FROM items WHERE id = ?;`).run(itemId);

    if (!item) {
      return c.json({ error: "Failed to delete item" }, 500);
    }

    return c.json({ message: "Deleted item successfully" });
  }
}
