const fastify = require('./www')
const { config } = require('./src/config/config')

fastify.listen(config.port, (err, address) => {
  if (err) {
    fastify.log.error(err)
    throw err
  }

  fastify.log.info(`server listening on ${address}`)
})
