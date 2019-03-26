const bcrypt = require('bcrypt')
const bcryptP = require('bcrypt-promise')

const {User} = require('../../../models')
const {to} = require('../../../plugins/')

async function login(req, reply) {
  const {email, password} = req.body
  let err
  let pass
  let user
  [err, user] = await to(User.findOne({email}))
  if (err) {
    reply.send('your email or password wrong!')
  }

  const userPass = user.password;
  [err, pass] = await to(bcryptP.compare(password, userPass))
  if (err) {
    reply.send(err)
  }

  if (pass) {
    const token = this.jwt.sign({userId: user._id})
    user.password = ''
    reply.code(200).send({data: user, token: `Bearer ${token}`})
  } else {
    reply.code(401).send('your email or password wrong!')
  }
}

module.exports.login = login

async function register(req, reply) {
  const {name, email, password} = req.body
  // Password hash
  let err
  let hash
  [err, hash] = await to(bcrypt.hash(password, 10))
  if (err) {
    throw new Error(err)
  }

  let user;
  [err, user] = await to(User.create({name, email, password: hash}))
  if (err) {
    reply.code(452).send({message: 'user with that email already created'})
  }

  if (user) {
    const token = this.jwt.sign({userId: user._id})
    delete user.password
    reply.code(200).send({data: user, token: `Bearer ${token}`})
  }
}

module.exports.register = register
