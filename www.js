const Fastify = require('fastify')

function buildFastify () {
  const fastify = Fastify({ logger: process.env.NODE_ENV === 'development' })

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  return fastify
}

module.exports = buildFastify
