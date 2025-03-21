import { db } from "@/services/Database.service";
import { Context } from "hono";

export class SignupController {
  static async signup(c: Context) {
    const { email, password } = await c.req.json();

    const user = await db.query(`SELECT * FROM users WHERE email = ?;`).get(email);

    if (user) {
      return c.json({ error: "User already exists" }, 400);
    }

    const insert = db.query(`INSERT INTO users (email, password) VALUES (?, ?);`).run(email, password);

    if (!insert) {
      return c.json({ error: "Failed to create user" }, 500);
    }

    return c.json({ message: "User created successfully" });
  }
}