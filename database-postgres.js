import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  async list(search) {
    let characters;

    if (search) {
      characters = await sql`select * from characters where name ilike ${
        "%" + search + "%"
      };`;
    } else {
      characters = await sql`select * from characters`;
    }

    return characters;
  }

  async create(character) {
    const characterId = randomUUID();
    const { name, description, image } = character;

    await sql`
        insert into characters (
            id,
            name,
            description,
            image
        ) values (
            ${characterId},
            ${name},
            ${description},
            ${image}
        );
    `;
  }

  async update(id, character) {
    const { name, description, image } = character;

    await sql`update characters set name = ${name}, description = ${description}, image = ${image} where id = ${id};`;
  }

  async delete(id) {
    await sql`delete from characters where id = ${id};`;
  }
}
