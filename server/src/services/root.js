const { User } = require('../models')

async function routes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, reply) => {
      reply.code(200).send({ api: 'ready' })
    }
  })
  // To check user authorized or not sendback minimal user info
  fastify.route({
    method: 'GET',
    url: '/authorize',
    preValidation: [fastify.verifyjwt],
    handler: (req, reply) => {
      const { userId } = fastify.jwt.verify(req.session.jwt)
      User.findOne({ _id: userId }, 'role _id email').then(data =>
        reply.code(200).send({ data })
      )
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
