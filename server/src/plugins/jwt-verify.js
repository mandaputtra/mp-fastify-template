const fastifyPlugin = require('fastify-plugin')
const {config} = require('../config/config')

async function verifyjwt(fastify) {
  fastify.register(require('fastify-jwt'), {
    secret: 'supersecret',
    sign: {
      algorithm: 'HS384',
      expiresIn: config.jwt.expiresIn
    },
    verify: {
      maxAge: config.jwt.maxAge
    }
  })

  fastify.decorate('verifyjwt', async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (error) {
      reply.code(401).send(error)
    }
  })
}

module.exports = fastifyPlugin(verifyjwt)
