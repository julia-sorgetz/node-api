import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

server.post("/characters", async (request, reply) => {
  const { name, description, image } = request.body;

  await database.create({
    name,
    description,
    image,
  });

  return database.list();
});

server.get("/characters", async (request) => {
  const search = request.query.search;

  const characters = await database.list(search);

  return characters;
});

server.put("/characters/:id", async (request, reply) => {
  const characterId = request.params.id;
  const { name, description, image } = request.body;

  await database.update(characterId, {
    name,
    description,
    image,
  });

  return database.list();
});

server.delete("/characters/:id", async (request, reply) => {
  const characterId = request.params.id;

  await database.delete(characterId);

  return database.list();
});

server.listen({
  host: "0.0.0.0",
  port: process.env.PORT ?? 3333,
});
