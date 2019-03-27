// Contains route and middleware
const Joi = require('joi')
const {RoleController} = require('./controller')
const {create} = require('./validation')

async function routes(fastify) {
  fastify.route({
    method: 'POST',
    url: '/role/create',
    preValidation: [fastify.verifyjwt],
    schema: create,
    schemaCompiler: schema => data => Joi.validate(data, schema),
    handler: RoleController.create
  })

  fastify.route({
    method: 'GET',
    url: '/role/menu',
    preValidation: [fastify.verifyjwt],
    handler: RoleController.loadmenu
  })
}

module.exports = routes
