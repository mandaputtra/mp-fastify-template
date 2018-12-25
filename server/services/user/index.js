const UserController = require('./controller')

async function routes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/user',
    handler: UserController.login
  })
}

module.exports = routes;