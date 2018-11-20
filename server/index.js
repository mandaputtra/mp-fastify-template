const fastify = require('fastify')({
  logger: {
    prettyPrint: true
  }
})

// Registering cors
fastify.register(require('fastify-cors'))

// Registering the database
fastify.register(require('./plugins/db'), {
  url: 'mongodb://localhost:27017/server_vf'
})

// Regitering the route
fastify.register(require('./routes/v1'))

// Generate server
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
