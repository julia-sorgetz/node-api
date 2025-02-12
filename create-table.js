import { sql } from "./db.js";

// sql`
//     DROP TABLE IF EXISTS videos;
// `.then(() => console.log("Tabela removida com sucesso"));

// await sql`
//     CREATE TABLE videos (
//         title       TEXT,
//         description TEXT,
//         duration    INTEGER,
//         id          TEXT PRIMARY KEY
// );
// `.then(() => console.log("Tabela criada com sucesso"));

// await sql`
//     CREATE TABLE characters (
//         id          TEXT PRIMARY KEY,
//         name        TEXT,
//         description TEXT
// );
// `.then(() => console.log("Tabela criada com sucesso"));

await sql`
    ALTER TABLE characters
    ADD COLUMN image TEXT;
`.then(() => console.log("Coluna criada com sucesso"));
