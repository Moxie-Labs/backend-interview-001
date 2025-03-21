import { db } from "@/services/Database.service";

const createListTable = db.query(`
  CREATE TABLE IF NOT EXISTS lists (
    id integer primary key autoincrement,
    name text,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp
  );
`);

createListTable.run();
