const { User } = require('../../models');
const { to } = require('../../plugins/errorHandler');
const bcrypt = require('bcrypt');

async function login(req, reply) {
  reply
    .code(200)
    .send({ from: 'handler' })
};
module.exports.login = login;

async function register(req, reply) {
  let { name, email, password } = req.body
  // password hash
  let err, hash, salt;
  // generate salt for password
  [err, salt] = await to(bcrypt.genSalt(10));
  if(err) throw new Error(err);
  // hash password
  [err, hash] = await to(bcrypt.hash(password, salt));
  if(err) throw new Error(err);
  this.jwt
  let user;
  [err, user] = await to(User.create({ name, email, password: hash }));
  if(err) reply.send({ message: 'user with that email already created' });
  if(user) {
    const token = this.jwt.sign({ user_id: user._id })
    reply.code(200).send({ data: user, token: `Bearer ${token}` })
  };
};
module.exports.register = register;
