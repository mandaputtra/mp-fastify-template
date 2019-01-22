const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

async function dbConnector(fastify, options) {
  const {url} = options
  delete options.url

  mongoose.Promise = global.Promise // Set mongo up to use promises

  const db = await mongoose.connect(
    url,
    {useNewUrlParser: true, useCreateIndex: true}
  )
  fastify.decorate('mongo', db)
}

// Wrapping a plugin function with fastify-plugin exposes the decorators,
// hooks, and middlewares declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)
