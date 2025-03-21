import { Database } from "bun:sqlite";

export const db = new Database(":memory:");

const query = db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id integer primary key autoincrement,
    first_name text,
    last_name text,
    email text,
    password text,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp
  );
`);

query.run();
