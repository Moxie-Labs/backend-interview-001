import { Context } from "hono";
import { db } from "@/services/Database.service";

type User = {
  password: string;
  email: string;
}

export class LoginController {
  static async login(c: Context) {
    const { email, password } = await c.req.json();

    const user = db.query<User, { email: string }>(`SELECT * FROM users WHERE email = ?;`).get(email);

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    if (user.password !== password) {
      return c.json({ error: "Invalid password" }, 401);
    }

    return c.json({ message: "Login successful" });
  }
}