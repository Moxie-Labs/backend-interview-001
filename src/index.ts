import { Hono } from 'hono'
import { db } from '@/services/Database.service';

const app = new Hono();

app.get('/', async (c) => {
  const select = db.query(`SELECT * FROM users;`);
  const result = select.get();

  if (!result) {
    return c.json({ error: 'No result' }, 500)
  }

  return c.json(result)
})

export default app