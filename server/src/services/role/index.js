// Contains route and middleware
const {RoleController} = require('./controller')

async function routes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/role/create',
    handler: RoleController.create
  })
}

module.exports = routes