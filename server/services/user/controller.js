const { User } = require('../../models');
const { to } = require('../../plugins/errorHandler')

async function login(req, reply) {
  reply
    .code(200)
    .send({ from: 'handler' })
};
module.exports.login = login;

async function register(req, reply) {
  const { name, email, password } = req.body
  let err;
  [err, user] = await to(User.create({ name, email, password }))
  if(err) reply.code(200).send('really?')
  reply
    .code(200)
    .send({ data: user })
};
module.exports.register = register;
