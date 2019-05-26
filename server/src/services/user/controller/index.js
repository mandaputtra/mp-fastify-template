const { login, register } = require('./login-register')
const { logout } = require('./logout')
const { getUserList } = require('./user-list')

module.exports.UserController = {
  login,
  register,
  logout,
  getUserList
}
