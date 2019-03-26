// Const {to} = require('../../../plugins')

async function create(req, reply) {
  reply.code(200).send({hello: 'from create role'})
}

module.exports.create = create
