#!/usr/bin/env node

//  Config path
//  Check on dev or on production
const {config} = require('./src/config/config')

// Init fastify
// eslint-disable-next-line import/order
const fastify = require('fastify')({
  logger: {
    prettyPrint: false,
    prettifier: require('pino-pretty')
  }
})

function start() {
  fastify.listen(config.port, (err, address) => {
    if (err) {
      fastify.log.error(err)
      throw err
    }

    fastify.log.info(`server listening on ${address}`)
  })
}

// Cors
fastify.register(require('fastify-cors'), {
  origin: true
})
// Database registrastion
fastify.register(require('./src/plugins/db'), {
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
fastify.register(require('./src/services/root'))
fastify.register(require('./src/services/user'))

start()
