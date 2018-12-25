async function routes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.code(200).send({ api: "ready"})
    }
  })
}

module.exports = routes;
