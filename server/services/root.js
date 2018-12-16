"use strict";

// If you prefer async/await, use the following

module.exports = async function(fastify, opts) {
  fastify.get("/", async function(request, reply) {
    reply.code(200).send({ message: "API ready!" });
  });
};
