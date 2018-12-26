const Joi = require('joi')
const UserController = require('./controller')
const { registerValidation } = require('./validation')

async function routes(fastify, options) {
  fastify.route({
    method: 'POST',
    url: '/login',
    handler: UserController.login
  })

  fastify.route({
    method: 'POST',
    url: '/register',
    schema: registerValidation,
    schemaCompiler: schema => data => Joi.validate(data, schema),
    handler: UserController.register
  })
}

module.exports = routes;