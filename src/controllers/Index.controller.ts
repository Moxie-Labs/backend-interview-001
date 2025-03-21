import { Context } from "hono";

export class IndexController {
  static async index(c: Context) {
    return c.json({ message: "Hello there" });
  }
}
