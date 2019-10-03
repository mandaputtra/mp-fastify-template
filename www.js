const Fastify = require('fastify')

function buildFastify() {
  const fastify = Fastify({ logger: process.env.ENVIRONMENT === 'production' })

  fastify.get('/', function(request, reply) {
    reply.send({ hello: 'world' })
  })

  return fastify
}

module.exports = buildFastify
