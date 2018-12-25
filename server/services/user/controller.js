const { User } = require('../../models')

async function login(req, reply) {
  reply.code(200).send({ from: 'handler' })
};
module.exports.login = login;

async function register(req, reply) {
  reply.code(200).send({ from: 'handler' })
};
module.exports.register = register;
