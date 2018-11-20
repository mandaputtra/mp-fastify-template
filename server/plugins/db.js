const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

async function dbConnector (fastify, options) {
  const url = options.url
  delete options.url

  options.useNewUrlParser = true

  const db = await mongoose.connect(url, options)
  fastify.decorate('mongo', db)
}

// Wrapping a plugin function with fastify-plugin exposes the decorators,
// hooks, and middlewares declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)