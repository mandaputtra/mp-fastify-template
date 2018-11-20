const fastify = require('fastify')({
  logger: true
})

// Registering the database
fastify.register(require('./db'), {
  url: 'mongodb://localhost:27017/'
})

// Regitering the route
fastify.register(require('./route'))

// Generate server
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
