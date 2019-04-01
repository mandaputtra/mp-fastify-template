const fastifyPlugin = require('fastify-plugin')
const {config} = require('../config/config')

async function verifyjwt(fastify) {
  fastify.register(require('fastify-jwt'), {
    secret: 'supersecret',
    decode: {complete: true},
    sign: {
      issuer: 'api.vfcms.company',
      algorithm: 'HS384',
      expiresIn: config.jwt.expiresIn
    },
    verify: {
      issuer: 'api.vfcms.company',
      maxAge: config.jwt.maxAge
    }
  })

  fastify.decorate('verifyjwt', async (request, reply) => {
    const token = request.session.jwt
    try {
      const decode = await fastify.jwt.verify(token)
      await request.checkTokenCSRF(request.session.scrt, decode.tokenCSRF)
    } catch (error) {
      reply.code(401).send(error)
    }
  })
}

module.exports = fastifyPlugin(verifyjwt)
