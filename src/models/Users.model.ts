import { db } from "@/services/Database.service";

const createUserTable = db.query(`
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

createUserTable.run();
