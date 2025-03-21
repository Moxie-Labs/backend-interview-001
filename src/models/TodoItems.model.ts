import { db } from "@/services/Database.service";

const createItemsTable = db.query(`
  CREATE TABLE IF NOT EXISTS items (
    id integer primary key autoincrement,
    label text,
    list_id integer not null,
    completed boolean default false,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp,
    FOREIGN KEY (list_id) REFERENCES lists (id)
  );
`);

createItemsTable.run();