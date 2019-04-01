const {login, register} = require('./login-register')
const {logout} = require('./logout')

module.exports.UserController = {
  login,
  register,
  logout
}
