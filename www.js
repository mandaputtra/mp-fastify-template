const Fastify = require('fastify')

function buildFastify () {
  // Show pretty logger on development so you had pretifier
  // logger that nice to look at, disable on production
  // because no logger make app much faster
  const logger = process.env.NODE_ENV === 'development'
    ? { logger: { prettyPrint: true } }
    : false

  // Initialize fastify
  const fastify = Fastify({ logger })

  // root request
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  return fastify
}

module.exports = buildFastify
