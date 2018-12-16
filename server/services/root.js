const { User } = require("../models");

async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.get("/search/:id", async (request, reply) => {
    let blue = await User.find();
    reply.code(200).send({ hello: blue });
  });
}

module.exports = routes;
