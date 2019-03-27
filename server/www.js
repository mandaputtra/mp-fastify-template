#!/usr/bin/env node

//  Config path
//  Check on dev or on production
const {config} = require('./src/config/config')

const production = config.env === 'production'
// Init fastify
// eslint-disable-next-line import/order
const fastify = require('fastify')({
  logger: {
    prettyPrint: !production,
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
// Helmet
fastify.register(require('fastify-helmet'), {
  hidePoweredBy: {setTo: 'Go 1.12.1'},
  xssFilter: {setOnOldIE: true}
})
// Database registrastion
fastify.register(require('./src/plugins/db'), {
  url: `mongodb://${config.dbhost}:${config.dbport}/${config.dbname}`
})
// JWT registration
fastify.register(require('./src/plugins/jwt-verify'))
fastify.register(require('./src/plugins/jwt-decode'))

// Route register here
// you can had all you routes at one file or separate
// its up to you
fastify.register(require('./src/services/root'))
fastify.register(require('./src/services/role'))
fastify.register(require('./src/services/user'))

start()
