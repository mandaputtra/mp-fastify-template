const fastify = require('fastify')({
  logger: {
    prettyPrint: true,
    prettifier: require('pino-pretty')
  }
})

const {config} = require('./config/config')

fastify.register(require('fastify-cors'), {
  origin: true
})
// Database registrastion
fastify.register(require('./plugins/db'), {
  url: `mongodb://${config.dbhost}:${config.dbport}/${config.dbname}`
})
// JWT registration
fastify.register(require('fastify-jwt'), {
  secret: 'supersecret',
  decode: {complete: true},
  sign: {algorithm: 'HS384'},
  maxAge: 100000
})

// Route register here
// you can had all you routes at one file or separate
// its up to you
fastify.register(require('./services/root'))
fastify.register(require('./services/user'))

fastify.listen(config.port, (err, address) => {
  if (err) {
    fastify.log.error(err)
    throw err
  }

  fastify.log.info(`server listening on ${address}`)
})
