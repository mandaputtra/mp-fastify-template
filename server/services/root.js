async function routes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.code(200).send({api: 'ready'})
    }
  })
}

module.exports = routes
