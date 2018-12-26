const { User } = require('../../models');
const { to } = require('../../plugins/errorHandler');
const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise')

async function login(req, reply) {
  const { email, password } = req.body;
  let err, pass;
  [err, user] = await to(User.findOne({ email }));
  if(err) reply.send('your email or password wrong!');
  let userPass = user.password;
  [err, pass] = await to(bcrypt_p.compare(password, userPass));
  if(err) reply.send(err);

  if(pass) {
    const token = this.jwt.sign({ user_id: user._id });
    user.password = '';
    reply.code(200).send({ data: user, token: `Bearer ${token}` })
  } else {
    reply.code(401).send('your email or password wrong!')
  }
};
module.exports.login = login;

async function register(req, reply) {
  let { name, email, password } = req.body
  // password hash
  let err, hash;
  [err, hash] = await to(bcrypt.hash(password, 10));
  if(err) throw new Error(err);
  let user;
  [err, user] = await to(User.create({ name, email, password: hash }));
  if(err) reply.send({ message: 'user with that email already created' });
  if(user) {
    const token = this.jwt.sign({ user_id: user._id });
    user.password = '';
    reply.code(200).send({ data: user, token: `Bearer ${token}` })
  };
};
module.exports.register = register;
