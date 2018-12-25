const UserController = require('./controller')

async function routes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/user',
    handler: UserController.login
  })

  fastify.route({
    method: 'POST',
    url: '/register',
    handler: UserController.register
  })
}

module.exports = routes;