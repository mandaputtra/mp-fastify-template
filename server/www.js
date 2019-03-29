#!/usr/bin/env node

// Init fastify
const fastify = require('fastify')({
  logger: {
    level: 'trace',
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

//  REDIS INIT
const Redis = require('ioredis')

const redis = new Redis()
const abcache = require('abstract-cache')({
  useAwait: false,
  driver: {
    name: 'abstract-cache-redis', // Must be installed via `npm install`
    options: {client: redis}
  }
})

// Config
const {config} = require('./src/config/config')
// Sessions init, lest take an oppinion why use session later
fastify
  .register(require('fastify-redis'), {client: redis})
  .register(require('fastify-cookie'))
  .register(require('fastify-caching'), {cache: abcache})
  .register(require('fastify-server-session'), {
    secretKey: 'kak;ldaposkpodk123-0-0123,m;las;d1312321123', // Really dont forget this.
    sessionMaxAge: 900000 // 15 minutes in milliseconds
  })

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
// UNDER PRESSURE!
fastify.register(require('under-pressure'), {
  maxEventLoopDelay: 1000,
  maxHeapUsedBytes: 100000000,
  maxRssBytes: 100000000,
  message: 'Ya know event loop? SINGLE THREAD ASYNCRONOUS!',
  retryAfter: 50
})

// Register CRSF
fastify.register(require('./src/plugins/crsf/plugins'))

// Route register here
// you can had all you routes at one file or separate
// its up to you
fastify.register(require('./src/services/root'))
fastify.register(require('./src/services/role'))
fastify.register(require('./src/services/user'))

start()
