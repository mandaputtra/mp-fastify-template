const bcrypt = require('bcrypt')
const bcryptP = require('bcrypt-promise')

const {User} = require('../../../models')
const {to} = require('../../../plugins')

async function login(req, reply) {
  const {email, password} = req.body
  let err
  let pass
  let user
  [err, user] = await to(User.findOne({email}, 'name role email _id password'))
  if (err || !user) {
    return reply.code(226).send('Your email and password wrong!')
  }

  const userPass = user.password;
  [err, pass] = await to(bcryptP.compare(password, userPass))
  if (err) {
    return reply.code(226).send('Your email and password wrong!')
  }

  if (pass) {
    const secret = req.generateSecretCSRF
    const tokenCSRF = reply.createTokenCSRF(secret)
    const token = this.jwt.sign({
      userId: user._id,
      role: user.role,
      tokenCSRF
    })
    user.password = ''
    // Generate session secret for crsf
    // Generate session JWT
    req.session.scrt = secret
    req.session.jwt = token

    reply
      .code(200)
      .send({data: user})
  } else {
    reply.code(226).send('Your email and password wrong!')
  }
}

module.exports.login = login

async function register(req, reply) {
  const {email, password} = req.body
  // Password hash
  let err
  let hash
  [err, hash] = await to(bcrypt.hash(password, 10))
  if (err) {
    throw this.httpErrors.internalServerError()
  }

  let user;
  [err, user] = await to(User.create({email, password: hash}))
  if (err) {
    return reply.code(226).send({message: 'User with that email already created'})
  }

  const secret = req.generateSecretCSRF
  const tokenCSRF = reply.createTokenCSRF(secret)

  if (user) {
    const token = this.jwt.sign({
      userId: user._id,
      role: user.role,
      tokenCSRF
    })
    // Generate session secret for crsf
    // Generate session JWT
    req.session.scrt = secret
    req.session.jwt = token
    user.password = ''
    reply.code(200).send({data: user})
  }
}

module.exports.register = register
