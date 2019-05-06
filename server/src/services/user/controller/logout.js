async function logout(req, reply) {
  // Reset sessions to null for logging out user
  req.session.scrt = {}
  req.session.jwt = {}
  reply.code(200).send('Success Logged Out!')
}

module.exports.logout = logout
