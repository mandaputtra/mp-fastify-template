const {to} = require('../../../plugins')
const {Role} = require('../../../models')

async function create(req, reply) {
  const {name, role = []} = req.body
  const [err, roleData] = await to(Role.create({name, role}))
  if (err) {
    return reply.code(500).send({
      msg: 'Fail to create role',
      err
    })
  }

  reply.code(200).send({msg: `Role ${roleData.name} Created!`})
}

module.exports.create = create
