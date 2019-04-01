const {startOfToday} = require('date-fns')

async function logout(req, reply) {
  req.session.scrt = {}
  reply
    .setCookie('tks', 'invalid', {
      maxAge: 10,
      path: '/',
      expires: startOfToday()
    })
    .send('You have been logged out!')
}

module.exports.logout = logout
