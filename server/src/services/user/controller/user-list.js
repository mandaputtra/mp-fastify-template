const { User } = require('../../../models')
const { to } = require('../../../plugins')
const { userList } = require('../messages')

async function getUserList(req, reply) {
  // Reset sessions to null for logging out user
  const options = {
    page: 1,
    limit: 10,
    select: '_id email role createdAt',
    collation: {
      locale: 'en'
    }
  }
  const [err, users] = await to(User.paginate({}, options))
  if (err) return reply.code(500).send(err)
  reply.code(200).send({
    message: userList,
    users
  })
}

module.exports.getUserList = getUserList

async function search(req, reply) {
  // Reset sessions to null for logging out user
  reply.code(200).send({ message: userList })
}

module.exports.search = search
