//  config path
const {config} = require('./config/config')
//  check on dev or on production
const production =  config.env === 'production'

const fastify = require('fastify')({
  logger: {
    prettyPrint: !production,
    prettifier: require('pino-pretty')
  }
})


// file watcher only on dev mode prefer using chokidar
const chokidar = require('chokidar')
const path = require('path')
if (!production) {
  chokidar.watch([
    'config',
    'models',
    'plugins',
    'services',
    'utils',
  ], {
    ignored: /[\\\/](node_modules|public|__tests__)[\\\/]/
  })
  .on('ready', () => fastify.log.info('Watch file ready!'))
  .on('change', (path) => {
    fastify.log.info(`Clearing ${path} module cache from server`)
    if (require.cache[path]) delete require.cache[path]
  })
}

// cors
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
