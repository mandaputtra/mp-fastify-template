const Fastify = require('fastify')

function buildFastify () {
  // Show pretty logger on development so you had pretifier
  // logger that nice to look at, disable on production
  // because no logger make app much faster
  const isDev = process.env.NODE_ENV === 'development'

  // Initialize fastify
  const fastify = Fastify({ logger: { prettyPrint: isDev } })

  // root request
  fastify.get('/', function (_request, reply) {
    reply.send({ hello: 'world' })
  })

  return fastify
}

module.exports = buildFastify
