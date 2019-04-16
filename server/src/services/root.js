async function routes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply
        .code(200)
        .send({api: 'ready'})
    }
  })
  // To check user authorized or not
  fastify.route({
    method: 'GET',
    url: '/authorize',
    preValidation: [fastify.verifyjwt],
    handler: (req, reply) => {
      reply.code(200).send('Authorized!')
    }
  })
  fastify.route({
    method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    url: '*',
    handler: (req, reply) => {
      reply.notFound()
    }
  })
}

module.exports = routes
