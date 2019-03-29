async function routes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/',
    preValidation: [fastify.verifyjwt],
    handler: (req, reply) => {
      reply
        .code(200)
        .send({api: 'ready'})
    }
  })
  fastify.route({
    method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    url: '*',
    handler: (req, reply) => {
      reply.code(404).send({not: 'found'})
    }
  })
}

module.exports = routes
