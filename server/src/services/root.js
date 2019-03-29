async function routes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      const secret = req.generateSecretCSRF
      const token = reply.createTokenCSRF(secret)
      const check = req.checkTokenCSRF(secret, token)
      console.log(check)
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
