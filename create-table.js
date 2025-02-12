import { sql } from "./db.js";

// sql`
//     DROP TABLE IF EXISTS videos;
// `.then(() => console.log("Tabela removida com sucesso"));

await sql`
    CREATE TABLE videos (
        title       TEXT,
        description TEXT,
        duration    INTEGER,
        id          TEXT PRIMARY KEY
);
`.then(() => console.log("Tabela criada com sucesso"));
